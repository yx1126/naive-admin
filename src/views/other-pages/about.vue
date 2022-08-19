<template>
    <div class="about">
        <n-grid :cols="1" y-gap="12">
            <n-gi>
                <n-card title="生产环境依赖">
                    <n-descriptions label-placement="left" :column="3" bordered>
                        <n-descriptions-item label="@milkdown/core">^6.3.2</n-descriptions-item>
                        <n-descriptions-item label="@milkdown/plugin-menu">^6.3.2</n-descriptions-item>
                        <n-descriptions-item label="@milkdown/plugin-tooltip">^6.3.2</n-descriptions-item>
                        <n-descriptions-item label="@milkdown/preset-commonmark">^6.3.2</n-descriptions-item>
                        <n-descriptions-item label="@milkdown/preset-gfm">^6.3.2</n-descriptions-item>
                        <n-descriptions-item label="@milkdown/prose">^6.3.2</n-descriptions-item>
                        <n-descriptions-item label="@milkdown/theme-nord">^6.3.2</n-descriptions-item>
                        <n-descriptions-item label="@milkdown/utils">^6.3.2</n-descriptions-item>
                        <n-descriptions-item label="@wangeditor/editor">^5.1.12</n-descriptions-item>
                        <n-descriptions-item label="@wangeditor/editor-for-vue">^5.1.12</n-descriptions-item>
                        <n-descriptions-item label="axios">^0.26.1</n-descriptions-item>
                        <n-descriptions-item label="clipboard">^2.0.11</n-descriptions-item>
                        <n-descriptions-item label="dayjs">^1.11.4</n-descriptions-item>
                        <n-descriptions-item label="echarts">^5.3.3</n-descriptions-item>
                        <n-descriptions-item label="highlight.js">^11.6.0</n-descriptions-item>
                        <n-descriptions-item label="keypress.js">^2.1.5</n-descriptions-item>
                        <n-descriptions-item label="mitt">^3.0.0</n-descriptions-item>
                        <n-descriptions-item label="pinia">^2.0.17</n-descriptions-item>
                        <n-descriptions-item label="screenfull">^6.0.2</n-descriptions-item>
                        <n-descriptions-item label="seemly">^0.3.5</n-descriptions-item>
                        <n-descriptions-item label="vue">^3.2.37</n-descriptions-item>
                        <n-descriptions-item label="vue-i18n">^9.1.10</n-descriptions-item>
                        <n-descriptions-item label="vue-router">^4.1.2</n-descriptions-item>
                        <n-descriptions-item label="vuedraggable">^4.1.0</n-descriptions-item>
                    </n-descriptions>
                </n-card>
            </n-gi>
            <n-gi>
                <n-card title="开发环境依赖">
                    <n-descriptions label-placement="left" :column="3" bordered>
                        <n-descriptions-item label="@rushstack/eslint-patch">^1.1.4</n-descriptions-item>
                        <n-descriptions-item label="@types/node">^16.11.45</n-descriptions-item>
                        <n-descriptions-item label="@typescript-eslint/eslint-plugin">^5.31.0</n-descriptions-item>
                        <n-descriptions-item label="@typescript-eslint/parser">^5.31.0</n-descriptions-item>
                        <n-descriptions-item label="@vicons/antd">^0.12.0</n-descriptions-item>
                        <n-descriptions-item label="@vitejs/plugin-vue">^2.3.3</n-descriptions-item>
                        <n-descriptions-item label="@vitejs/plugin-vue-jsx">^1.3.10</n-descriptions-item>
                        <n-descriptions-item label="@vue/eslint-config-typescript">^10.0.0</n-descriptions-item>
                        <n-descriptions-item label="@vue/tsconfig">^0.1.3</n-descriptions-item>
                        <n-descriptions-item label="eslint">^8.20.0</n-descriptions-item>
                        <n-descriptions-item label="eslint-plugin-vue">^8.7.1</n-descriptions-item>
                        <n-descriptions-item label="naive-ui">^2.31.0</n-descriptions-item>
                        <n-descriptions-item label="sass">^1.54.0</n-descriptions-item>
                        <n-descriptions-item label="typescript">~4.5.5</n-descriptions-item>
                        <n-descriptions-item label="unplugin-vue-components">^0.17.21</n-descriptions-item>
                        <n-descriptions-item label="unplugin-vue-define-options">^0.6.2</n-descriptions-item>
                        <n-descriptions-item label="vite">^2.9.14</n-descriptions-item>
                        <n-descriptions-item label="vite-plugin-svg-icons">^2.0.1</n-descriptions-item>
                        <n-descriptions-item label="vue-eslint-parser">^9.0.3</n-descriptions-item>
                        <n-descriptions-item label="vue-tsc">^0.31.4</n-descriptions-item>
                    </n-descriptions>
                </n-card>
            </n-gi>
        </n-grid>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: "About",
});
</script>
