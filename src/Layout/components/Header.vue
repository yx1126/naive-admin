<template>
    <div class="header">
        <div class="header-left">
            <slot name="logo" />
            <slot name="left" />
        </div>
        <div class="header-right">
            <div class="header-trigger"><Search /></div>
            <div class="header-trigger"><MessageBell /></div>
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
        <UpdatePwd v-model:show="showPwdModal" />
    </div>
</template>

<script setup lang="ts">
import Search from "./Search.vue";
import UpdatePwd from "./UpdatePwd.vue";
import MessageBell from "./MessageBell.vue";
import { FullscreenOutlined, FullscreenExitOutlined, UserOutlined, LogoutOutlined, SettingOutlined } from "@vicons/antd";
import { renderIcon } from "@/naive";
import type { DropdownOption, DropdownDividerOption } from "naive-ui";

const { isFullScreen, toggle } = useFullscreen();
const set = useSetStore();
const router = useRouter();
const dialog = useFeedBack("dialog");
const message = useFeedBack("message");
const mitter = useMitt();

let showPwdModal = $ref(false);

const dropdownOptions: Array<DropdownOption | DropdownDividerOption> = [
    { label: "个人中心", key: "set", icon: renderIcon(UserOutlined) },
    { label: "修改密码", key: "update-pwd", icon: renderIcon("password") },
    { type: "divider" },
    { label: "github", key: "https://github.com/yangxin11010/naive-admin", icon: renderIcon("github") },
    { label: "gitee", key: "https://gitee.com/yangxin11010/naive-admin", icon: renderIcon("gitee") },
    { type: "divider" },
    { label: "退出登录", key: "logout", icon: renderIcon(LogoutOutlined) },
];

async function handleSelect(key: string, option: DropdownOption) {
    console.log(key, option);
    switch (key) {
        case "set":
            router.push("/person");
            break;
        case "update-pwd":
            showPwdModal = true;
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
    }
}

onBeforeMount(() => {
    mitter.on("updatePwd", () => {
        showPwdModal = true;
    });
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
