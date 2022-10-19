<template>
    <n-popover
        v-model:show="isShowPopver"
        trigger="manual"
        :show-arrow="false"
        :to="false"
        placement="bottom-start"
    >
        <template #trigger>
            <n-input-group class="icon-select-group" @click.stop>
                <n-input-group-label v-if="iconPlacement === 'left' || iconPlacement !== 'right'">
                    <Icon :icon="defaultIcon" :size="20" />
                </n-input-group-label>
                <n-input
                    v-bind="$attrs"
                    v-model:value="defaultIcon"
                    :placeholder="placeholder"
                    :disabled="disabled"
                    readonly
                    @click="onClick"
                    @clear.stop
                />
                <n-input-group-label v-if="iconPlacement === 'right'">
                    <Icon :icon="defaultIcon" :size="20" />
                </n-input-group-label>
            </n-input-group>
        </template>
        <div class="icon-select-wrapper" :style="iconSelectStyle" @click.stop>
            <div class="search">
                <n-input v-model:value="searchKey" placeholder="请输入图标名称" clearable @update:value="onSearchChange" />
            </div>
            <div class="icon-select-list">
                <template v-for="item, i in svgList" :key="i">
                    <n-button
                        class="button"
                        :title="item"
                        :class="value === item ? 'icon-active' : ''"
                        @click="onIconClick(item)"
                        @mouseenter="onIconMouse(item)"
                        @mouseleave="onIconMouse('')"
                    >
                        <template #icon>
                            <Icon :icon="item" :size="20" />
                        </template>
                    </n-button>
                </template>
            </div>
            <div class="paging">
                <span>{{ iconName }}</span>
                <n-pagination v-model:page="page" :page-size="size" :item-count="searchSvgList.length" simple />
            </div>
        </div>
    </n-popover>
</template>

<script lang="ts">
import Icon from "../Icon";
import { svgList as _svgList } from "./index";
import { NPagination } from "naive-ui";
import { on, off } from "@/util/dom";
import type { PropType } from "vue";

export default defineComponent({
    name: "IconSelect",
    components: { NPagination, Icon },
    inheritAttrs: false,
    props: {
        value: String,
        placeholder: { type: String, default: "请选择图标" },
        closeable: { type: Boolean, default: true },
        iconPlacement: { type: String as PropType<"left" | "right">, default: "left" },
        disabled: { type: Boolean, default: false },
    },
    emits: ["update:value"],
    setup(props, { emit }) {
        const set = useSetStore();

        const isShowPopver = ref(false);
        const searchKey = ref("");
        const page = ref(1);
        const iconName = ref("");
        const size = ref(24);

        const iconSelectStyle = computed(() => {
            return {
                "--icon-select-active": set.themeColor,
            };
        });
        const searchSvgList = computed(() => {
            const key = unref(searchKey);
            return _svgList.filter(n => key ? n.includes(key) : n);
        });
        const svgList =  computed(() => {
            const pageNum = (page.value - 1) * size.value;
            return searchSvgList.value.slice(pageNum, pageNum + size.value);
        });
        let defaultIcon = computed({
            get: () => props.value || "",
            set: value => emit("update:value", value),
        });

        function onSearchChange(value: string) {
            page.value = value ? 1 :  getPageByChoose();
        }

        function onIconClick(name: string) {
            defaultIcon.value = name;
            if(props.closeable) {
                onClickoutside();
            }
        }

        function onIconMouse(value: string) {
            iconName.value = value;
        }

        function onClickoutside() {
            isShowPopver.value = false;
            off(document, "click", onClickoutside);
        }

        function getPageByChoose(list: string[] = _svgList) {
            const { value } = props;
            return value ? Math.ceil((list.findIndex(item => item === value) + 1) / size.value) : 1;
        }

        function onClick() {
            if(props.disabled) return;
            if(!isShowPopver.value) {
                isShowPopver.value = !isShowPopver.value;
                searchKey.value = "";
                page.value = getPageByChoose();
                on(document, "click", onClickoutside);
                return;
            }
            onClickoutside();
        }
        return {
            iconSelectStyle,
            page,
            size,
            iconName,
            searchKey,
            isShowPopver,
            defaultIcon,
            searchSvgList,
            svgList,
            onSearchChange,
            onIconClick,
            onIconMouse,
            onClick,
        };
    },
});
</script>

<style lang="scss" scoped>
.icon-select-group {
    width: auto;
    :deep(.n-input-group-label) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.icon-select-wrapper {
    width: 350px;
    .icon-select-list {
        height: 166px;
        margin: 10px 0;
        display: grid;
        grid-template-columns: repeat(6, 50px);
        grid-template-rows: repeat(4, 34px);
        grid-gap: 10px;
        align-content: flex-start;
        .button.icon-active :deep(.n-button__border) {
            border-color: var(--icon-select-active);
        }
    }
    .paging {
        display: flex;
        justify-content: space-between;
    }
}
</style>
