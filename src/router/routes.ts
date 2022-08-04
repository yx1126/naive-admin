import { renderIcon } from "@/naive";
import { DashboardOutlined } from "@vicons/antd";
import TransRouterView from "@/components/TransRouterView";
import type { RouteRecordRaw } from "vue-router";

export function Layout(name: string) {
    return defineComponent({
        name,
        render() {
            return h(TransRouterView);
        },
    });
}

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
            icon: renderIcon(DashboardOutlined),
        },
        redirect: "/dashboard/console",
        component: Layout("Dashboard"),
        children: [
            {
                path: "console",
                name: "Console",
                meta: {
                    title: "主控台",
                    icon: "404",
                },
                component: () => import("@/views/dashboard/console.vue"),
            },
            {
                path: "workspace",
                name: "Workspace",
                meta: {
                    title: "工作台",
                    icon: DashboardOutlined,
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
        component: Layout("ListPage"),
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
        component: Layout("FormPage"),
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
        component: Layout("Components"),
        children: [
            {
                path: "base-table",
                name: "BaseTable",
                meta: {
                    title: "基础表格",
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
        path: "/directive",
        name: "Directive",
        meta: {
            title: "自定义指令",
            icon: "",
        },
        redirect: "/directive/copy",
        component: Layout("Directive"),
        children: [
            {
                path: "copy",
                name: "Copy",
                meta: {
                    title: "复制: v-copy",
                    icon: "",
                },
                component: () => import("@/views/directive/copy.vue"),
                children: [],
            },
            {
                path: "fullscreen",
                name: "Fullscreen",
                meta: {
                    title: "全屏: v-fullscreen",
                    icon: "",
                },
                component: () => import("@/views/directive/fullscreen.vue"),
                children: [],
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
        redirect: "/error/401",
        component: Layout("Error"),
        children: [
            {
                path: "401",
                name: "401",
                meta: {
                    title: "401",
                    icon: "",
                },
                component: () => import("@/views/error/401.vue"),
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
        path: "/router-nested",
        name: "RouterNested",
        meta: {
            title: "路由嵌套",
            icon: "",
        },
        redirect: "/router-nested/menu-1/menu-1-1/menu-1-1-1",
        component: Layout("RouterNested"),
        children: [
            {
                path: "menu-1",
                name: "Menu1",
                meta: {
                    title: "菜单-1",
                    icon: "",
                },
                component: Layout("Menu1"),
                children: [
                    {
                        path: "menu-1-1",
                        name: "Menu11",
                        meta: {
                            title: "菜单1-1",
                            icon: "",
                        },
                        component: Layout("Menu11"),
                        children: [
                            {
                                path: "menu-1-1-1",
                                name: "Menu111",
                                meta: {
                                    title: "菜单1-1-1",
                                    icon: "",
                                },
                                component: () => import("@/views/router-nested/menu-1/menu-1-1/menu-1-1-1/menu-1-1-1.vue"),
                            },
                        ],
                    },
                    {
                        path: "menu-1-2",
                        name: "Menu12",
                        meta: {
                            title: "菜单1-2",
                            icon: "",
                        },
                        component: () => import("@/views/router-nested/menu-1/menu-1-1/menu-1-2.vue"),
                    },
                ],
            },
            {
                path: "menu-2",
                name: "Menu2",
                meta: {
                    title: "菜单-2",
                    icon: "",
                },
                component: () => import("@/views/router-nested/menu-2.vue"),
            },
        ],
    },
    {
        path: "/permission",
        name: "Permission",
        meta: {
            title: "权限管理",
            icon: "",
        },
        redirect: "/permission/user-manage",
        component: Layout("Permission"),
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
        component: Layout("Set"),
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
    {
        path: "/person",
        name: "Person",
        meta: {
            title: "个人设置",
            icon: "",
        },
        component: () => import("@/views/other-pages/person.vue"),
    },
    {
        path: "/redirect/:path*",
        name: "Redirect",
        meta: {
            title: "",
            icon: "",
        },
        component: () => import("@/views/redirect/redirect.vue"),
    },
    { path: "/:pathMatch(.*)", redirect: "/error/404" },
];

export default routes;
