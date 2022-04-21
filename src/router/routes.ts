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
        },
        redirect: "/dashboard/console",
        component: Layout,
        children: [
            {
                path: "console",
                name: "Console",
                meta: {
                    title: "主控台",
                },
                component: () => import("@/views/dashboard/console.vue"),
            },
            {
                path: "workspace",
                name: "Workspace",
                meta: {
                    title: "工作台",
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
        },
        redirect: "/list-page/base-list",
        component: Layout,
        children: [
            {
                path: "base-list",
                name: "BaseList",
                meta: {
                    title: "基础列表",
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
        },
        redirect: "/form-page/base-form",
        component: Layout,
        children: [
            {
                path: "base-form",
                name: "BaseForm",
                meta: {
                    title: "基础表单",
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
        },
        redirect: "/components/base-table",
        component: Layout,
        children: [
            {
                path: "base-table",
                name: "BaseTable",
                meta: {
                    title: "基础表单",
                },
                component: () => import("@/views/components/base-table.vue"),
            },
        ],
    },
    {
        path: "/error",
        name: "Error",
        meta: {
            title: "异常页面",
        },
        redirect: "/error/403",
        component: Layout,
        children: [
            {
                path: "403",
                name: "403",
                meta: {
                    title: "403",
                },
                component: () => import("@/views/error/403.vue"),
            },
            {
                path: "404",
                name: "404",
                meta: {
                    title: "404",
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
        },
        redirect: "/permission/user-manage",
        component: Layout,
        children: [
            {
                path: "user-manage",
                name: "UserManage",
                meta: {
                    title: "用户管理",
                },
                component: () => import("@/views/permission/user-manage.vue"),
            },
            {
                path: "role-manage",
                name: "RoleManage",
                meta: {
                    title: "角色管理",
                },
                component: () => import("@/views/permission/role-manage.vue"),
            },
            {
                path: "menu-manage",
                name: "MenuManage",
                meta: {
                    title: "菜单管理",
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
        },
        redirect: "/set/system-set",
        component: Layout,
        children: [
            {
                path: "system-set",
                name: "SystemSet",
                meta: {
                    title: "系统设置",
                },
                component: () => import("@/views/set/system-set.vue"),
            },
            {
                path: "user-set",
                name: "UserSet",
                meta: {
                    title: "用户设置",
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
        },
        component: () => import("@/views/other-pages/about.vue"),
    },
    { path: "/:pathMatch(.*)", redirect: "/error/404" },
];

export default routes;
