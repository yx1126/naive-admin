<template>
    <div class="tags-wrapper" :style="tagsStyle" @contextmenu.prevent>
        <div ref="tagsRef" class="tags" @wheel="onMouseWheel">
            <template v-for="(t, i) in keepTags" :key="t.path">
                <n-tag
                    ref="tagsItemRefs"
                    class="tags-item"
                    :data-path="t.path"
                    :type="currentPath === t.path ? 'primary' : 'default'"
                    size="medium"
                    @click="onTagsClick(t)"
                    @contextmenu="onTagsContextmenu($event, t, i)"
                >
                    {{ t.title }}
                </n-tag>
            </template>
            <template v-for="(t, i) in activeTags" :key="t.path">
                <n-tag
                    ref="tagsItemRefs"
                    class="tags-item"
                    :data-path="t.path"
                    :type="currentPath === t.path ? 'primary' : 'default'"
                    size="medium"
                    closable
                    @click="onTagsClick(t)"
                    @contextmenu="onTagsContextmenu($event, t, i)"
                    @close.stop="onTagsClose(t, i)"
                >
                    {{ t.title }}
                </n-tag>
            </template>
        </div>
        <div class="tags-btn">
            <Icon class="tags-btn-item" size="18" @click="onRefresh">
                <ReloadOutlined />
            </Icon>
            <n-divider vertical />
            <Icon class="tags-btn-item" size="22" @click="onShowDropdown($event)">
                <MoreOutlined />
            </Icon>
        </div>
        <n-dropdown
            class="tags-dropdown"
            placement="bottom-start"
            trigger="manual"
            show-arrow
            :x="dropdownX"
            :y="dropdownY"
            :options="dropDownOptions"
            :show="showDropdownRef"
            @clickoutside="onClickoutside"
            @select="onDropdownSelect"
        />
    </div>
</template>

<script lang="ts" setup>
import {
    MoreOutlined,
    ReloadOutlined,
    PushpinFilled,
    PushpinOutlined,
    CloseOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    ColumnWidthOutlined,
    MinusOutlined,
    CloseCircleOutlined,
} from "@vicons/antd";
import { NTag, type DropdownOption, type DropdownDividerOption } from "naive-ui";
import type { Tags } from "@/stores";
import { renderIcon } from "@/naive";
import { LayoutConfig } from "@/config";

const route = useRoute();
const router = useRouter();
const tags = useTagsStore();
const dialog = useFeedBack("dialog");
const mitter = useMitt();

const tagsRef = ref<HTMLDivElement>();
const tagsItemRefs = ref<InstanceType<typeof NTag>[]>([]);

const showDropdownRef = ref(false);
const isShowCloseAll = ref(false);
const dropdownX = ref(0);
const dropdownY = ref(0);
const chooseTags = ref<Empty<Tags>>(null);
const chooseTagsIndex = ref(-1);

const keepTags = computed(() => tags.keepTags);
const activeTags = computed(() => tags.activeTags);
const currentPath = computed(() => route.path);
const tagsStyle = computed(() => {
    return {
        "--tags-height": LayoutConfig.tagsHeight + "px",
    };
});

const dropDownOptions = computed(() => {
    const result: Array<DropdownOption | DropdownDividerOption> = [];
    const isInKeep = keepTags.value.find(t => t.path === chooseTags.value?.path);
    const isInActive = activeTags.value.find(t => t.path === chooseTags.value?.path);
    const isIndexPage = "/dashboard/console" === chooseTags.value?.path;
    if(isInActive) {
        result.push({ label: "关闭当前", key: "remove", icon: renderIcon(CloseOutlined) });
    }
    if(chooseTagsIndex.value > 0 && isInActive) {
        result.push({ label: "关闭左侧", key: "removeLeft", icon: renderIcon(ArrowLeftOutlined) });
    }
    if(chooseTagsIndex.value < activeTags.value.length - 1 && isInActive) {
        result.push({ label: "关闭右侧", key: "removeRight", icon: renderIcon(ArrowRightOutlined) });
    }
    result.length && result.push({ type: "divider", key: "d0" });
    result.push({ label: "关闭其他", key: "removeOther", icon: renderIcon(ColumnWidthOutlined) });
    result.push({ label: "关闭全部", key: "removeAll", icon: renderIcon(MinusOutlined) });
    if((isInKeep && !isIndexPage && result.length) || isInActive) {
        result.push({ type: "divider", key: "d1" });
    }
    if(isInKeep && !isIndexPage) {
        result.push({ label: "移除固定", key: "removeFixed", icon: renderIcon(PushpinOutlined) });
    }
    if(isInActive) {
        result.push({ label: "保持固定", key: "keepFixed", icon: renderIcon(PushpinFilled) });
    }
    if(isShowCloseAll) {
        result.length && result.push({ type: "divider", key: "d2" });
        result.push({ label: "一键清除", key: "init", icon: renderIcon(CloseCircleOutlined) });
    }
    return result;
});

watch(
    () => route.fullPath,
    () => {
        if(route.fullPath.startsWith("/redirect")) return;
        tags.insert("activeTags", {
            title: route.meta.title as string,
            name: route.name as string,
            path: route.path,
            meta: route.meta,
            query: { ...(route.query as object) },
            matchedName: [...route.matched.map(item => item.name as string)],
        });
        moveToCurrentTag();
    },
    {
        immediate: true,
    },
);

useEventListener(window, "resize", moveToCurrentTag, { lazy: true });

function onTagsClick(tags: Tags) {
    router.push({ path: tags.path, query: tags.query });
}

function onTagsClose(tags: Tags, index: number) {
    chooseTags.value = tags;
    chooseTagsIndex.value = index;
    onDropdownSelect("remove");
}

async function onTagsContextmenu(e: MouseEvent, tags: Tags, index: number) {
    isShowCloseAll.value = false;
    chooseTags.value = tags;
    chooseTagsIndex.value = index;
    const currentTarget = e.currentTarget as HTMLDivElement;
    const targetOffset = currentTarget.getBoundingClientRect();
    dropdownX.value = e.clientX - 13;
    dropdownY.value = targetOffset.top + currentTarget.clientHeight;
    showDropdownRef.value = true;
}

async function onShowDropdown(e: MouseEvent) {
    // 设置当前 tags index type
    const tags = keepTags.value.find(t => t.path === currentPath.value);
    const index = keepTags.value.findIndex(t => t.path === currentPath.value);
    chooseTags.value = tags || activeTags.value.find(t => t.path === currentPath.value);
    chooseTagsIndex.value = index !== -1 ? index : activeTags.value.findIndex(t => t.path === currentPath.value);
    // 设置  dropdown x,y
    const currentTarget = e.currentTarget as HTMLDivElement;
    const offset = currentTarget.getBoundingClientRect();
    isShowCloseAll.value = true;
    // 14: dropdown 箭头距离右边的距离
    dropdownX.value = offset.left + 14 + currentTarget.clientWidth / 2;
    dropdownY.value = offset.top + currentTarget.clientHeight;
    showDropdownRef.value = true;
}

function onMouseWheel(e: WheelEvent) {
    e.preventDefault();
    onClickoutside();
    tagsRef.value!.scrollLeft += e.deltaY || e.detail * 20;
}

async function onDropdownSelect(key: string | number) {
    onClickoutside();
    if(!chooseTags.value || chooseTagsIndex.value === -1) return;
    const activeTagsLength = activeTags.value.length - 1;
    const keepTagsLength = keepTags.value.length - 1;
    const currentPageIndex = activeTags.value.findIndex(t => t.path === currentPath.value);
    switch(key) {
        case "remove":
            if(activeTagsLength < 1) {
                router.push(keepTags.value[keepTagsLength].path);
            } else {
                if(currentPath.value === chooseTags.value.path) router.push(activeTags.value[chooseTagsIndex.value + (chooseTagsIndex.value < activeTagsLength ? 1 : -1)].path);
            }
            tags.remove(chooseTags.value.path);
            break;
        case "removeLeft":
            if(currentPageIndex !== -1 && chooseTagsIndex.value > currentPageIndex) router.push(chooseTags.value.path);
            tags.removeLeft(chooseTags.value.path);
            break;
        case "removeRight":
            if(currentPageIndex !== -1 && chooseTagsIndex.value < currentPageIndex) router.push(chooseTags.value.path);
            tags.removeRight(chooseTags.value.path);
            break;
        case "removeOther":
            if(currentPageIndex !== -1 && chooseTags.value.path !== currentPath.value) router.push(chooseTags.value.path);
            tags.removeOther(chooseTags.value.path);
            break;
        case "removeAll":
            if(currentPageIndex !== -1) router.push(keepTags.value[keepTagsLength].path);
            tags.removeAll(chooseTags.value.path);
            break;
        case "removeFixed":
            tags.removeFixed(chooseTags.value.path);
            break;
        case "keepFixed":
            tags.keepFixed(chooseTags.value.path);
            break;
        case "init":
            dialog.warning({
                title: "提示",
                content: "确认清空所有 “Tags” 吗？",
                positiveText: "确定",
                negativeText: "取消",
                onPositiveClick: () => {
                    router.push("/");
                    tags.init();
                },
            });
            break;
    }
}

function onClickoutside() {
    showDropdownRef.value = false;
}

function onRefresh() {
    mitter.emit("keepAlive", route.name as string);
    router.replace(`/redirect${route.fullPath}`);
}

async function moveToCurrentTag() {
    await nextTick();
    // v-for ref 数组不能保证与源数组相同的顺序
    // https://staging-cn.vuejs.org/guide/essentials/template-refs.html#refs-inside-v-for
    const tagsItemRef = tagsItemRefs.value.find(t => {
        const el = t.$el as HTMLDivElement;
        return el.dataset.path === currentPath.value;
    });
    if(!tagsItemRef) return;
    const tagsItemRefEl = tagsItemRef.$el as HTMLDivElement;
    // 超出 左边 视野
    const overLeft = tagsItemRefEl.offsetLeft < tagsRef.value!.scrollLeft;
    // 超出 右边 视野
    const overRight = tagsItemRefEl.offsetLeft + tagsItemRefEl.clientWidth > tagsRef.value!.scrollLeft + tagsRef.value!.clientWidth;
    if(overLeft || overRight) {
        tagsRef.value!.scrollTo({
            left: overLeft ? tagsItemRefEl.offsetLeft - 100 : tagsItemRefEl.offsetLeft - tagsRef.value!.clientWidth + tagsItemRefEl.clientWidth + 100,
            behavior: "smooth",
        });
    }
}
</script>

<style lang="scss" scoped>
.tags-wrapper {
    width: 100%;
    height: var(--tags-height);
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    @extend .flex-align-center;
    @extend .noselect;
}
.tags {
    overflow-x: auto;
    overflow-y: hidden;
    flex-wrap: nowrap;
    white-space: nowrap;
    flex: 1;
    padding: 0 5px;
    @extend .flex-align-center, .noscroll;
}
.tags-item {
    cursor: pointer;
    &:not(:first-child) {
        margin-left: 5px;
    }
}
.tags-btn {
    height: 80%;
    box-shadow: -5px 1px 5px #d6d3d3;
    position: relative;
    top: -1px;
    z-index: 100;
    padding-left: 8px;
    padding-right: 8px;
    text-align: center;
    @extend .flex-align-center;
}
.tags-btn-item {
    cursor: pointer;
}
</style>
