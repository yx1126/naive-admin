<template>
    <div class="header">
        <div class="header-left">
            <slot name="logo" />
            <slot name="left" />
        </div>
        <div class="header-right">
            <div class="header-trigger"><Search /></div>
            <div class="header-trigger">
                <Icon :size="18" @click="toggle">
                    <component :is="isFullScreen ? FullscreenExitOutlined : FullscreenOutlined" />
                </Icon>
            </div>
            <n-dropdown trigger="hover" :options="dropdownOptions" @select="handleSelect">
                <div class="header-trigger">
                    <n-avatar round :size="34" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                    <div class="username">admin</div>
                </div>
            </n-dropdown>
            <div class="header-trigger">
                <Icon :size="18" @click="set.toggleDrawer"><SettingOutlined /></Icon>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Search from "./Search.vue";
import { FullscreenOutlined, FullscreenExitOutlined, UserOutlined, LogoutOutlined, SettingOutlined } from "@vicons/antd";
import { renderIcon } from "@/naive";
import type { DropdownOption, DropdownDividerOption } from "naive-ui";

const { isFullScreen, toggle } = useFullscreen();
const set = useSetStore();
const router = useRouter();
const dialog = useFeedBack("dialog");
const message = useFeedBack("message");

const dropdownOptions: Array<DropdownOption | DropdownDividerOption> = [
    { label: "个人设置", key: "set", icon: renderIcon(UserOutlined) },
    { label: "退出登录", key: "logout", icon: renderIcon(LogoutOutlined) },
];

async function handleSelect(key: string, option: DropdownOption) {
    console.log(key, option);
    switch (key) {
        case "set":
            router.push("/person");
            break;
        case "logout":
            dialog.warning({
                title: "提示",
                content: "确认退出登陆吗？",
                positiveText: "确定",
                negativeText: "取消",
                onPositiveClick: () => {
                    message.info("退出登陆成功！");
                },
            });
            break;
    }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 100%;
    @extend .flex-between-center;
    &-left {
        height: 100%;
        @extend .flex-align-center;
    }
    &-right {
        height: 100%;
        // padding-right: 20px;
        @extend .flex-align-center;
    }
    &-trigger {
        height: 100%;
        padding: 0 12px;
        cursor: pointer;
        @extend .flex-align-center;
    }
    .username {
        margin-left: 10px;
    }
}
</style>
