<template>
    <div class="icon-select">
        <n-space vertical :wrap-item="false">
            <n-card title="图标选择器">
                <IconSelect v-model:value="icon" clearable />
            </n-card>
            <n-card>
                <template #header>
                    <n-space align="center">
                        <n-input v-model:value="iconName" placeholder="请输入图标名称" clearable />
                        <span class="text">copy</span>
                        <n-switch v-model:value="flag" class="switch">
                            <template #checked>code</template>
                            <template #unchecked>name</template>
                        </n-switch>
                    </n-space>
                </template>
                <n-space :wrap-item="false">
                    <template v-for="s, i in svgList" :key="s">
                        <n-card class="icon-card" hoverable :embedded="i % 2 === 0">
                            <div class="icon-wrapper">
                                <div class="icon">
                                    <Icon :icon="s" :size="26" />
                                    <n-ellipsis :line-clamp="1">{{ s }}</n-ellipsis>
                                </div>
                                <n-button class="icon-action" text size="tiny" @click="onCopyIcon(s)">copy</n-button>
                            </div>
                        </n-card>
                    </template>
                </n-space>
            </n-card>
        </n-space>
    </div>
</template>

<script setup lang="ts">
import IconSelect, { svgList as _svgList } from "@/components/IconSelect";
import copy from "@/util/clipboard";

defineOptions({
    name: "IconSelectPage",
});

const message = useFreeBack("message");

const iconName = $ref("");
const icon = $ref("");
const flag = $ref(false);

const svgList = $computed(() => _svgList.filter(n => n.includes(iconName)));

const onCopyIcon = useDeounce((name: string) => {
    const copyText = flag ? `<Icon icon="${name}" />` : name;
    copy(copyText).then(() => {
        message.success(`copy ${copyText} success!`);
    });
}, 500, true);
</script>

<style lang="scss" scoped>
.icon-select {
    .switch {
        font-size: 14px;
    }
    .text {
        font-size: 14px;
    }
    .icon-card {
        max-width: calc((100% - 48px) / 5);
        min-width: 160px;
        .icon-wrapper {
            @extend .flex-between-center;
            .icon {
                font-size: 13px;
                gap: 0 10px;
                @extend .flex-center;
            }
            .icon-action {
                opacity: 0;
                transition: all .3s;
            }
        }
        &:hover {
            .icon-action {
                opacity: 1;
            }
        }
        :deep(.n-card__content) {
            padding: 20px;
        }
    }
}
</style>
