<template>
    <div class="icon-select">
        <n-space vertical :wrap-item="false">
            <n-card title="图标选择器">
                <IconSelect v-model:value="icon" clearable />
            </n-card>
            <n-card>
                <template #header>
                    <n-space align="center">
                        <lazy-input v-model:value.lazy="iconName" placeholder="请输入图标名称" clearable />
                        <span class="text">copy</span>
                        <n-switch v-model:value="flag" class="switch">
                            <template #checked>code</template>
                            <template #unchecked>name</template>
                        </n-switch>
                    </n-space>
                </template>
                <n-space :wrap-item="false">
                    <template v-for="s, i in _svgList" :key="i">
                        <IconCard :show="s.includes(iconName)" :icon="s" hoverable :embedded="i % 2 === 0" @click="onCopyIcon" />
                    </template>
                </n-space>
            </n-card>
        </n-space>
    </div>
</template>

<script setup lang="ts">
import IconSelect, { svgList as _svgList } from "@/components/IconSelect";
import LazyInput from "@/components/LazyInput/LazyInput.vue";
import copy from "@/util/clipboard";
import IconCard from "./components/IconCard.vue";

defineOptions({
    name: "IconSelectPage",
});

const message = useFeedBack("message");

const iconName = $ref("");
const icon = $ref("");
const flag = $ref(false);

const onCopyIcon = useDeounce((name: string) => {
    const copyText = flag ? `<Icon icon="${name}" />` : name;
    copy(copyText).then(() => {
        message.success(`copy ${copyText} success!`);
    });
}, true);
</script>

<style lang="scss" scoped>
.icon-select {
    .switch {
        font-size: 14px;
    }
    .text {
        font-size: 14px;
    }
}
</style>
