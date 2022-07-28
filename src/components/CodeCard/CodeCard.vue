<template>
    <n-card class="code-card">
        <template #header-extra>
            <n-space>
                <n-tooltip>
                    <template #trigger>
                        <n-button v-copy="code" text><Icon :size="16" icon="copy" /></n-button>
                    </template>
                    复制代码
                </n-tooltip>
                <n-tooltip>
                    <template #trigger>
                        <n-button text @click="showFooter = !showFooter"><Icon :size="16" icon="code" /></n-button>
                    </template>
                    显示代码
                </n-tooltip>
            </n-space>
        </template>
        <template v-if="showFooter" #footer>
            <n-code :code="code" word-wrap language="html" />
        </template>
        <slot />
    </n-card>
</template>


<script lang="ts" setup>
withDefaults(defineProps<{
    code?: string
}>(), {
    code: "",
});

const showFooter = $ref(false);
</script>

<style lang="scss" scoped>
.code-card {
    :deep(.n-card__footer) {
        border-top: 1px solid var(--n-border-color);
        padding: 20px 24px;
    }
}
</style>
