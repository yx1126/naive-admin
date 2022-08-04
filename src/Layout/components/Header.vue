<template>
    <div class="header">
        <div class="header-left">
            <slot name="logo" />
            <slot name="left" />
        </div>
        <div class="header-right">
            <div class="header-trigger">
                <Search />
            </div>
            <div class="header-trigger">
                <Icon :size="18" @click="toggle">
                    <component :is="isFullScreen ? FullscreenExitOutlined : FullscreenOutlined" />
                </Icon>
            </div>
            <n-dropdown trigger="hover" :options="dropdownOptions" @select="handleSelect">
                <div class="header-trigger">
                    <n-avatar round :size="34" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                    <div class="username">
                        admin
                    </div>
                </div>
            </n-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useFullscreen } from "@/hooks";
import Search from "./Search.vue";
import { FullscreenOutlined, FullscreenExitOutlined, UserOutlined, LogoutOutlined } from "@vicons/antd";
import { renderIcon } from "@/naive";
import { useFreeBack } from "@/hooks";
import type { DropdownOption, DropdownDividerOption } from "naive-ui";

const { isFullScreen, toggle } = useFullscreen();
const router = useRouter();
const dialog = useFreeBack("dialog");
const message = useFreeBack("message");

const dropdownOptions: Array<DropdownOption | DropdownDividerOption> = [
    { label: "个人设置", key: "set", icon: renderIcon(UserOutlined) },
    { type: "divider" },
    { label: "Vue", key: "https://staging-cn.vuejs.org/", icon: renderIcon("vue") },
    { label: "Vite", key: "https://cn.vitejs.dev/", icon: renderIcon("vite") },
    { label: "NaiveUi", key: "https://www.naiveui.com/zh-CN/light", icon: renderIcon("naive-ui") },
    { label: "Sass", key: "https://www.sass.hk/", icon: renderIcon("sass") },
    { label: "Typescript", key: "https://www.tslang.cn/index.html", icon: renderIcon("typescript") },
    { type: "divider" },
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
        default:
            window.open(key);
            break;
    }
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
        height: 100%;
        @extend .flex-align-center;
    }
    &-right {
        height: 100%;
        padding-right: 20px;
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
