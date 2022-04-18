import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

const resolve = (path: string) => {
    return fileURLToPath(new URL(`./${path}`, import.meta.url));
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        Components({
            dts: true,
            resolvers: [NaiveUiResolver()],
        }),
    ],
    resolve: {
        alias: {
            "@": resolve("src"),
            "@comps": resolve("src/components"),
            "@hooks": resolve("src/hooks"),
            "@types": resolve("types"),
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
        // minify: "terser", // use terser will prod clear console debugger
        // terserOptions: {
        //     // prod clear console debugger
        //     compress: {
        //         drop_console: true,
        //         drop_debugger: true,
        //     },
        // },
    },
});
