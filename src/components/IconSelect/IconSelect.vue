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
                    v-bind="attrs"
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
                <template v-for="item in svgList" :key="item">
                    <n-button class="button" :class="value === item ? 'icon-active' : ''" @click="onIconClick(item)">
                        <template #icon>
                            <Icon :icon="item" :size="20" />
                        </template>
                    </n-button>
                </template>
            </div>
            <div class="paging">
                <SimplePagination v-model:page="page" v-model:size="size" :total="searchSvgList.length" show-jumper>
                    <template #prefix="data">
                        <span>{{ data.page }} / {{ data.pageCount }}</span>
                    </template>
                </SimplePagination>
            </div>
        </div>
    </n-popover>
</template>

<script setup lang="ts">
import Icon from "../Icon";
import { svgList as _svgList } from "./index";
import { SimplePagination } from "../Pagination";

defineOptions({
    name: "IconSelect",
    inheritAttrs: false,
});

const emit = defineEmits<{
    (event: "update:value", value: string): void
}>();

const props = withDefaults(defineProps<{
    value?: string;
    placeholder?: string;
    closeable?: boolean;
    iconPlacement?: "left" | "right";
    disabled?: boolean;
}>(), {
    placeholder: "请选择图标",
    closeable: true,
    iconPlacement: "left",
    disabled: false,
});

const attrs = useAttrs();
const set = useSetStore();

let isShowPopver = $ref(false);
let searchKey = $ref("");
let page = $ref(1);
const size = $ref(24);

const iconSelectStyle = $computed(() => {
    return {
        "--icon-select-active": set.themeColor,
    };
});
const searchSvgList = $computed(() => {
    return _svgList.filter(n => searchKey ? n.includes(searchKey) : n);
});
const svgList =  $computed(() => {
    const pageNum = (page - 1) * size;
    return searchSvgList.slice(pageNum, pageNum + size);
});
let defaultIcon = $computed({
    get: () => props.value || "",
    set: value => emit("update:value", value),
});

function onSearchChange(value: string) {
    page = value ? 1 :  getPageByChoose();
}

function onIconClick(name: string) {
    defaultIcon = name;
    if(props.closeable) {
        onClickoutside();
    }
}

function onClickoutside() {
    isShowPopver = false;
    document.removeEventListener("click", onClickoutside);
}

function getPageByChoose(list: string[] = _svgList) {
    const { value } = props;
    return value ? Math.ceil((list.findIndex(item => item === value) + 1) / size) : 1;
}

function onClick() {
    if(props.disabled) return;
    if(!isShowPopver) {
        isShowPopver = !isShowPopver;
        searchKey = "";
        page = getPageByChoose();
        document.addEventListener("click", onClickoutside);
        return;
    }
    onClickoutside();
}

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
        justify-content: flex-end;
    }
}
</style>
