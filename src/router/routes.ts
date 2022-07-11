import { defineComponent, h } from "vue";
import { RouterView } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

export const Layout = defineComponent({
    name: "DefaultLayout",
    render() {
        return h(RouterView);
    },
});

const routes: RouteRecordRaw[] = [
    {
        path: "",
        redirect: "/dashboard/console",
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        meta: {
            title: "Dashboard",
            icon: "",
        },
        redirect: "/dashboard/console",
        component: Layout,
        children: [
            {
                path: "console",
                name: "Console",
                meta: {
                    title: "主控台",
                    icon: "",
                },
                component: () => import("@/views/dashboard/console.vue"),
            },
            {
                path: "workspace",
                name: "Workspace",
                meta: {
                    title: "工作台",
                    icon: "",
                },
                component: () => import("@/views/dashboard/workspace.vue"),
            },
        ],
    },
    {
        path: "/list-page",
        name: "ListPage",
        meta: {
            title: "列表页面",
            icon: "",
        },
        redirect: "/list-page/base-list",
        component: Layout,
        children: [
            {
                path: "base-list",
                name: "BaseList",
                meta: {
                    title: "基础列表",
                    icon: "",
                },
                component: () => import("@/views/list-page/base-list.vue"),
            },
        ],
    },
    {
        path: "/form-page",
        name: "FormPage",
        meta: {
            title: "表单页面",
            icon: "",
        },
        redirect: "/form-page/base-form",
        component: Layout,
        children: [
            {
                path: "base-form",
                name: "BaseForm",
                meta: {
                    title: "基础表单",
                    icon: "",
                },
                component: () => import("@/views/form-page/base-form.vue"),
            },
        ],
    },
    {
        path: "/components",
        name: "Components",
        meta: {
            title: "组件示例",
            icon: "",
        },
        redirect: "/components/base-table",
        component: Layout,
        children: [
            {
                path: "base-table",
                name: "BaseTable",
                meta: {
                    title: "基础表单",
                    icon: "",
                },
                component: () => import("@/views/components/base-table.vue"),
            },
            {
                path: "wang-editor",
                name: "WandEditor",
                meta: {
                    title: "富文本编辑器",
                    icon: "",
                },
                component: () => import("@/views/components/wang-editor.vue"),
            },
        ],
    },
    {
        path: "/error",
        name: "Error",
        meta: {
            title: "异常页面",
            icon: "",
        },
        redirect: "/error/403",
        component: Layout,
        children: [
            {
                path: "403",
                name: "403",
                meta: {
                    title: "403",
                    icon: "",
                },
                component: () => import("@/views/error/403.vue"),
            },
            {
                path: "404",
                name: "404",
                meta: {
                    title: "404",
                    icon: "",
                },
                component: () => import("@/views/error/404.vue"),
            },
        ],
    },
    {
        path: "/permission",
        name: "Permission",
        meta: {
            title: "异常页面",
            icon: "",
        },
        redirect: "/permission/user-manage",
        component: Layout,
        children: [
            {
                path: "user-manage",
                name: "UserManage",
                meta: {
                    title: "用户管理",
                    icon: "",
                },
                component: () => import("@/views/permission/user-manage.vue"),
            },
            {
                path: "role-manage",
                name: "RoleManage",
                meta: {
                    title: "角色管理",
                    icon: "",
                },
                component: () => import("@/views/permission/role-manage.vue"),
            },
            {
                path: "menu-manage",
                name: "MenuManage",
                meta: {
                    title: "菜单管理",
                    icon: "",
                },
                component: () => import("@/views/permission/menu-manage.vue"),
            },
        ],
    },
    {
        path: "/set",
        name: "Set",
        meta: {
            title: "设置页面",
            icon: "",
        },
        redirect: "/set/system-set",
        component: Layout,
        children: [
            {
                path: "system-set",
                name: "SystemSet",
                meta: {
                    title: "系统设置",
                    icon: "",
                },
                component: () => import("@/views/set/system-set.vue"),
            },
            {
                path: "user-set",
                name: "UserSet",
                meta: {
                    title: "用户设置",
                    icon: "",
                },
                component: () => import("@/views/set/user-set.vue"),
            },
        ],
    },
    {
        path: "/about",
        name: "About",
        meta: {
            title: "关于",
            icon: "",
        },
        component: () => import("@/views/other-pages/about.vue"),
    },
    { path: "/:pathMatch(.*)", redirect: "/error/404" },
];

export default routes;
