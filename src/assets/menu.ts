import type { Menu } from "@/types/menus";

const menus: Menu[] = [
    {
        label: "Dashboard",
        path: "/dashboard",
        name: "Dashboard",
        component: null,
        children: [
            {
                label: "主控台",
                path: "console",
                name: "Console",
                component: "@/views/dashboard/console.vue",
            },
            {
                label: "工作台",
                path: "workspace",
                name: "Workspace",
                component: "@/views/dashboard/workspace.vue",
            },
        ],
    },
    {
        label: "列表页面",
        path: "/list-page",
        name: "ListPage",
        component: null,
        children: [
            {
                label: "基础列表",
                path: "base-list",
                name: "BaseList",
                component: "@/views/list-page/base-list.vue",
            },
        ],
    },
    {
        label: "表单页面",
        path: "/form-page",
        name: "FormPage",
        component: null,
        children: [
            {
                label: "基础表单",
                path: "base-list",
                name: "BaseList",
                component: "@/views/form-page/base-form.vue",
            },
        ],
    },
    {
        label: "组件示例",
        path: "/components",
        name: "Components",
        component: null,
        children: [
            {
                label: "基础表单",
                path: "base-table",
                name: "BaseTable",
                component: "@/views/components/base-table.vue",
            },
        ],
    },
    {
        label: "异常页面",
        path: "/error",
        name: "Error",
        component: null,
        children: [
            {
                label: "403",
                path: "403",
                name: "403",
                component: "@/views/error/403.vue",
            },
            {
                label: "404",
                path: "404",
                name: "404",
                component: "@/views/error/404.vue",
            },
        ],
    },
    {
        label: "权限管理",
        path: "/permission",
        name: "Permission",
        component: null,
        children: [
            {
                label: "用户管理",
                path: "user-manage",
                name: "UserManage",
                component: "@/views/permission/user-manage.vue",
            },
            {
                label: "角色管理",
                path: "role-manage",
                name: "RoleManage",
                component: "@/views/permission/role-manage.vue",
            },
            {
                label: "菜单管理",
                path: "menu-manage",
                name: "MenuManage",
                component: "@/views/permission/menu-manage.vue",
            },
        ],
    },
    {
        label: "设置页面",
        path: "/set",
        name: "Set",
        component: null,
        children: [
            {
                label: "系统设置",
                path: "system-set",
                name: "SystemSet",
                component: "@/views/set/system-set.vue",
            },
            {
                label: "用户设置",
                path: "user-set",
                name: "UserSet",
                component: "@/views/set/user-set.vue",
            },
        ],
    },
    {
        label: "关于",
        path: "/about",
        name: "About",
        component: "@/views/other-pages/about.vue",
    },
];
export default menus;
