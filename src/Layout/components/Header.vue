<template>
    <div class="header" ref="headerRef">
        <div class="header-left">
            <slot name="logo"></slot>
            <slot name="left"></slot>
        </div>
        <div class="header-right">
            <div class="header-trigger" @click="toggle">
                <Icon :size="18"><component :is="fullScreen ? FullscreenExitOutlined : FullscreenOutlined" /></Icon>
            </div>
            <n-dropdown trigger="hover" :options="dropdownOptions" @select="handleSelect">
                <div class="header-trigger">
                    <n-avatar round :size="34" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                    <div class="username">admin</div>
                </div>
            </n-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick, ref } from "vue";
import { useFullscreen } from "@/hooks";
import { FullscreenOutlined, FullscreenExitOutlined } from "@vicons/antd";
import type { DropdownOption, DropdownDividerOption } from "naive-ui";

const headerRef = ref();

const { fullScreen, toggle } = useFullscreen();

const dropdownOptions: Array<DropdownOption | DropdownDividerOption> = [
    {
        label: "个人设置",
        key: "set",
    },
    {
        label: "退出登录",
        key: "logout",
    },
];

async function handleSelect(key: string | number, option: DropdownOption) {
    console.log(key, option);
}

onMounted(async () => {
    await nextTick();
});
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 100%;
    @extend .flex-between-center;
    &-left {
        @extend .flex-align-center;
    }
    &-right {
        padding-right: 20px;
        @extend .flex-align-center;
    }
    &-trigger {
        height: 60px;
        padding: 0 12px;
        cursor: pointer;
        @extend .flex-align-center;
    }
    .username {
        margin-left: 10px;
    }
}
</style>
