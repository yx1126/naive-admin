<template>
    <div class="tags-wrapper">
        <div class="tags">
            <template v-for="t in keepTags" :key="t.path">
                <div class="tags-item">{{ t.title }}</div>
            </template>
            <template v-for="t in activeTags" :key="t.path">
                <div class="tags-item">{{ t.title }}</div>
            </template>
        </div>
        <div class="tags-btn">
            <n-icon class="tags-btn-item" size="18" @click="onRefresh">
                <ReloadOutline />
            </n-icon>
            <n-icon class="tags-btn-item" size="20" @click="onFullScreen">
                <FullScreenMaximize24Filled />
            </n-icon>
            <n-icon class="tags-btn-item" size="22">
                <MoreVertical24Regular />
            </n-icon>
        </div>
    </div>
</template>

<script lang="ts" setup>
import MoreVertical24Regular from "@vicons/fluent/MoreVertical24Regular";
import FullScreenMaximize24Filled from "@vicons/fluent/FullScreenMaximize24Filled";
import ReloadOutline from "@vicons/ionicons5/ReloadOutline";
import { watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTagsStore } from "@/stores";

const route = useRoute();
const tags = useTagsStore();

const keepTags = computed(() => tags.keepTags);
const activeTags = computed(() => tags.activeTags);

watch(
    () => route.fullPath,
    (path, oldPath) => {
        console.log(path, oldPath);
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

function onRefresh() {
    console.log("onRefresh");
}
function onFullScreen() {
    console.log("onFullScreen");
}
</script>

<style lang="scss" scoped>
.tags-wrapper {
    width: 100%;
    height: 35px;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    @extend .flex-align-center;
    @extend .no-select;
}
.tags {
    overflow-x: auto;
    overflow-y: hidden;
    flex-wrap: nowrap;
    white-space: nowrap;
    flex: 1;
    @extend .flex-align-center;
}
.tags-item {
    height: 35px;
    @extend .flex-align-center;
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
