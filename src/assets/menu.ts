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
} from "@vicons/antd";
import type { MenuOption } from "naive-ui";

const menus: MenuOption[] = [
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
                name: "基础表单",
                path: "base-table",
            },
        ],
    },
    {
        name: "异常页面",
        path: "/error",
        icon: renderIcon(ExclamationCircleOutlined),
        children: [
            {
                name: "403",
                path: "403",
            },
            {
                name: "404",
                path: "404",
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
        name: "关于",
        path: "/about",
        icon: renderIcon(ReadOutlined),
    },
];
export default menus;
