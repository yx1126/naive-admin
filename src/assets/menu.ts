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
        label: "Dashboard",
        key: "/dashboard",
        icon: renderIcon(DashboardOutlined),
        children: [
            {
                label: "主控台",
                key: "console",
            },
            {
                label: "工作台",
                key: "workspace",
            },
        ],
    },
    {
        label: "列表页面",
        key: "/list-page",
        icon: renderIcon(TableOutlined),
        children: [
            {
                label: "基础列表",
                key: "base-list",
            },
        ],
    },
    {
        label: "表单页面",
        key: "/form-page",
        icon: renderIcon(ProfileOutlined),
        children: [
            {
                label: "基础表单",
                key: "base-form",
            },
        ],
    },
    {
        label: "组件示例",
        key: "/components",
        icon: renderIcon(WalletOutlined),
        children: [
            {
                label: "基础表单",
                key: "base-table",
            },
        ],
    },
    {
        label: "异常页面",
        key: "/error",
        icon: renderIcon(ExclamationCircleOutlined),
        children: [
            {
                label: "403",
                key: "403",
            },
            {
                label: "404",
                key: "404",
            },
        ],
    },
    {
        label: "权限管理",
        key: "/permission",
        icon: renderIcon(SafetyCertificateOutlined),
        children: [
            {
                label: "用户管理",
                key: "user-manage",
            },
            {
                label: "角色管理",
                key: "role-manage",
            },
            {
                label: "菜单管理",
                key: "menu-manage",
            },
        ],
    },
    {
        label: "设置页面",
        key: "/set",
        icon: renderIcon(SettingOutlined),
        children: [
            {
                label: "系统设置",
                key: "system-set",
            },
            {
                label: "用户设置",
                key: "user-set",
            },
        ],
    },
    {
        label: "关于",
        key: "/about",
        icon: renderIcon(ReadOutlined),
    },
];
export default menus;
