import { renderIcon } from "@/naive";
import {
    DashboardOutlined,
    TableOutlined,
    WalletOutlined,
    ProfileOutlined,
    ExclamationCircleOutlined,
    SafetyCertificateOutlined,
    SettingOutlined,
    ReadOutlined,
    AppstoreAddOutlined,
    LinkOutlined,
    MacCommandOutlined,
} from "@vicons/antd";
import type { MenuOptions } from "@/naive";
import type { RouteMeta } from "vue-router";

const menus: MenuOptions & RouteMeta[] = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: renderIcon(DashboardOutlined),
        children: [
            {
                name: "主控台",
                path: "console",
            },
            {
                name: "工作台",
                path: "workspace",
            },
        ],
    },
    {
        name: "列表页面",
        path: "/list-page",
        icon: renderIcon(TableOutlined),
        children: [
            {
                name: "基础列表",
                path: "base-list",
            },
        ],
    },
    {
        name: "表单页面",
        path: "/form-page",
        icon: renderIcon(ProfileOutlined),
        children: [
            {
                name: "基础表单",
                path: "base-form",
            },
        ],
    },
    {
        name: "组件示例",
        path: "/components",
        icon: renderIcon(WalletOutlined),
        children: [
            {
                name: "基础表格",
                path: "base-table",
            },
            {
                name: "富文本编辑器",
                path: "wang-editor",
            },
            {
                name: "图标选择器",
                path: "icon-select",
            },
        ],
    },
    {
        name: "自定义指令",
        path: "/directive",
        icon: renderIcon(MacCommandOutlined),
        children: [
            {
                name: "复制: v-copy",
                path: "copy",
            },
            {
                name: "全屏: v-fullscreen",
                path: "fullscreen",
            },
            {
                name: "拖拽: v-drag",
                path: "drag",
            },
        ],
    },
    {
        name: "异常页面",
        path: "/error",
        icon: renderIcon(ExclamationCircleOutlined),
        children: [
            {
                name: "401",
                path: "401",
            },
            {
                name: "404",
                path: "404",
            },
        ],
    },
    {
        name: "路由嵌套",
        path: "/router-nested",
        icon: renderIcon(AppstoreAddOutlined),
        children: [
            {
                name: "菜单-1",
                path: "menu-1",
                children: [
                    {
                        name: "菜单-1-1",
                        path: "menu-1-1",
                        children: [
                            {
                                name: "菜单-1-1-1",
                                path: "menu-1-1-1",
                            },
                        ],
                    },
                    {
                        name: "菜单-1-2",
                        path: "menu-1-2",
                    },
                ],
            },
            {
                name: "菜单-2",
                path: "menu-2",
            },
        ],
    },
    {
        name: "权限管理",
        path: "/permission",
        icon: renderIcon(SafetyCertificateOutlined),
        children: [
            {
                name: "用户管理",
                path: "user-manage",
            },
            {
                name: "角色管理",
                path: "role-manage",
            },
            {
                name: "菜单管理",
                path: "menu-manage",
            },
        ],
    },
    {
        name: "设置页面",
        path: "/set",
        icon: renderIcon(SettingOutlined),
        children: [
            {
                name: "系统设置",
                path: "system-set",
            },
            {
                name: "用户设置",
                path: "user-set",
            },
        ],
    },
    {
        name: "外链接",
        path: "https://gitee.com/yangxin11010/naive-admin",
        icon: renderIcon(LinkOutlined),
        isLink: true,
    },
    {
        name: "关于",
        path: "/about",
        icon: renderIcon(ReadOutlined),
    },
];
export default menus;
