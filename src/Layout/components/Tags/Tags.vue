<template>
    <div class="tags-wrapper" @contextmenu.prevent>
        <div class="tags" ref="tagsRef" @wheel="onMouseWheel">
            <template v-for="(t, i) in keepTags" :key="t.path">
                <tags-item :active="currentPath === t.path" @click="onTagsClick(t)" @contextmenu="onTagsContextmenu($event, t, i, 'keepTags')">
                    {{ t.title }}
                </tags-item>
            </template>
            <template v-for="(t, i) in activeTags" :key="t.path">
                <tags-item
                    :active="currentPath === t.path"
                    closable
                    @click="onTagsClick(t)"
                    @contextmenu="onTagsContextmenu($event, t, i, 'activeTags')"
                    @close="onTagsClose(t, i)"
                    >{{ t.title }}</tags-item
                >
            </template>
        </div>
        <div class="tags-btn">
            <Icon class="tags-btn-item" size="18" @click="onRefresh">
                <ReloadOutline />
            </Icon>
            <Icon class="tags-btn-item" size="20" @click="onFullScreen">
                <FullScreenMaximize24Filled />
            </Icon>
            <Icon class="tags-btn-item" size="22" @click="onShowDropdown($event)">
                <MoreVertical24Regular />
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
import MoreVertical24Regular from "@vicons/fluent/MoreVertical24Regular";
import FullScreenMaximize24Filled from "@vicons/fluent/FullScreenMaximize24Filled";
import ReloadOutline from "@vicons/ionicons5/ReloadOutline";
import { GpsFixedRound, GpsNotFixedRound } from "@vicons/material";
import { CloseOutlined, ArrowLeftOutlined, ArrowRightOutlined, ColumnWidthOutlined, MinusOutlined, CloseCircleOutlined } from "@vicons/antd";
import TagsItem from "./TagsItem.vue";
import { watch, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTagsStore } from "@/stores";
import { renderIcon } from "@/naive";
import type { Tags, TagsType } from "@/stores";
import type { DropdownOption, DropdownDividerOption } from "naive-ui";

const route = useRoute();
const router = useRouter();
const tags = useTagsStore();

const tagsRef = $ref<HTMLDivElement>();
let showDropdownRef = $ref(false);
let isShowCloseAll = $ref(false);
let dropdownX = $ref(0);
let dropdownY = $ref(0);
let chooseTags = $ref<Tags | null | undefined>(null);
let chooseTagsIndex = $ref(-1);
let chooseTagsType = $ref<TagsType>("activeTags");

const keepTags = $computed(() => tags.keepTags);
const activeTags = $computed(() => tags.activeTags);
const currentPath = $computed(() => route.fullPath);

const dropDownOptions = $computed(() => {
    const result: Array<DropdownOption | DropdownDividerOption> = [
        { label: "关闭当前", key: "remove", icon: renderIcon(CloseOutlined) },
        { label: "关闭左侧", key: "removeLeft", icon: renderIcon(ArrowLeftOutlined) },
        { label: "关闭右侧", key: "removeRight", icon: renderIcon(ArrowRightOutlined) },
        { label: "关闭其他", key: "removeOther", icon: renderIcon(MinusOutlined) },
        { label: "关闭全部", key: "removeAll", icon: renderIcon(ColumnWidthOutlined) },
        { type: "divider", key: "d0" },
        { label: "保持固定", key: "keepFixed", icon: renderIcon(GpsFixedRound) },
        { label: "移除固定", key: "removeFixed", icon: renderIcon(GpsNotFixedRound) },
    ];
    if (isShowCloseAll) {
        result.push({ type: "divider", key: "d1" });
        result.push({ label: "一键清除", key: "init", icon: renderIcon(CloseCircleOutlined) });
    }
    return result;
});

watch(
    () => route.fullPath,
    path => {
        tags.insert("activeTags", {
            title: route.meta.title,
            name: route.name as string,
            path: path,
            meta: route.meta,
        });
    },
    {
        immediate: true,
    },
);
watch(
    () => showDropdownRef,
    value => {
        if (!value) {
            chooseTags = null;
            chooseTagsIndex = -1;
        }
    },
);

function onTagsClick(tags: Tags) {
    router.push(tags.path);
}

function onTagsClose(tags: Tags, index: number) {
    console.log(tags, index);
}

async function onTagsContextmenu(e: MouseEvent, tags: Tags, index: number, type: TagsType) {
    chooseTags = tags;
    chooseTagsIndex = index;
    chooseTagsType = type;
    const currentTarget = e.currentTarget as HTMLDivElement;
    onClickoutside();
    await nextTick();
    dropdownX = e.clientX;
    dropdownY = currentTarget.getBoundingClientRect().top + currentTarget.clientHeight;
    showDropdownRef = true;
}

function onMouseWheel(e: WheelEvent) {
    e.preventDefault();
    onClickoutside();
    tagsRef.scrollLeft += e.deltaY || e.detail * 20;
}

function onDropdownSelect(key: string | number, option: DropdownOption) {
    console.log(key, option);
    onClickoutside();
}
function onClickoutside() {
    showDropdownRef = false;
    chooseTags = null;
    chooseTagsIndex = -1;
    chooseTagsType = "keepTags";
}

function onRefresh() {
    console.log("onRefresh");
}

function onFullScreen() {
    console.log("onFullScreen");
}

async function onShowDropdown(e: MouseEvent) {
    // 设置当前 tags index type
    const tags = keepTags.find(t => t.path === currentPath);
    const index = keepTags.findIndex(t => t.path === currentPath);
    chooseTags = tags || activeTags.find(t => t.path === currentPath);
    chooseTagsIndex = index !== -1 ? index : activeTags.findIndex(t => t.path === currentPath);
    chooseTagsType = tags ? "keepTags" : "activeTags";
    // 设置  dropdown x,y
    const currentTarget = e.currentTarget as HTMLDivElement;
    const offset = currentTarget.getBoundingClientRect();
    onClickoutside();
    isShowCloseAll = true;
    await nextTick();
    // 14: dropdown 箭头距离右边的距离
    dropdownX = offset.left + 14 + currentTarget.clientWidth / 2;
    dropdownY = offset.top + currentTarget.clientHeight;
    showDropdownRef = true;
}
</script>

<style lang="scss" scoped>
.tags-wrapper {
    width: 100%;
    height: 35px;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    padding: 0 5px;
    @extend .flex-align-center;
    @extend .no-select;
}
.tags {
    overflow-x: auto;
    overflow-y: hidden;
    flex-wrap: nowrap;
    white-space: nowrap;
    flex: 1;
    @extend .flex-align-center, .scroll-hide;
}
.tags-btn {
    height: 80%;
    box-shadow: -2px 1px 5px #d6d3d3;
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
    &:not(:first-child) {
        margin-left: 10px;
    }
}
</style>
