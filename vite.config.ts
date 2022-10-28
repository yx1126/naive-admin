import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
import DefineOptions from "unplugin-vue-define-options/vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import Unocss from "@unocss/vite";

const resolve = (path: string) => {
    return fileURLToPath(new URL(`./${path}`, import.meta.url));
};

// https://vitejs.dev/config/
export default defineConfig({
    base: "/naive-admin/",
    resolve: {
        alias: {
            "@": resolve("src"),
            "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/style/global.scss" as *;`,
            },
        },
    },
    server: {
        host: "0.0.0.0",
        port: 9527,
        // open: true,
        https: false,
        proxy: {},
    },
    build: {
        outDir: "docs",
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if(assetInfo.name?.endsWith(".css"))
                        return "css/[name]-[hash][extname]";
                    else if(assetInfo.name?.endsWith(".svg"))
                        return "svg/[name]-[hash][extname]";
                    else
                        return "assets/[name]-[hash][extname]";
                },
                chunkFileNames: "js/[name]-[hash].js",
            },
        },
    },
    define: {
        __VUE_I18N_FULL_INSTALL__: JSON.stringify(false),
        __VUE_I18N_LEGACY_API__: JSON.stringify(false),
        __INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false),
    },
    plugins: [
        vue({
            reactivityTransform: true,
        }),
        vueJsx(),
        Unocss(),
        DefineOptions(),
        AutoImport({
            dts: true,
            dirs: ["./src/hooks", "./src/stores/exports"],
            imports: ["vue", "vue-router", "vue-i18n", {
                "vue": ["renderSlot", "renderList", "mergeProps", "createVNode", "render"],
            }],
        }),
        Components({
            dts: true,
            resolvers: [NaiveUiResolver()],
        }),
        createSvgIconsPlugin({
            // 指定需要缓存的图标文件夹
            iconDirs: [resolve("src/assets/svg")],
            // 指定symbolId格式
            symbolId: "icon-[dir]-[name]",
            /**
             * 自定义插入位置
             * @defaultValue body-last | "body-first"
             */
            inject: "body-last",
            /**
             * custom dom id
             * @defaultValue __svg__icons__dom__
             */
            customDomId: "__svg__icons__dom__",
        }),
    ],
});
