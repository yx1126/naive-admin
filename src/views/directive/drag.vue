<template>
    <div class="drag">
        <h1>v-drag</h1>
        <n-alert mb-12px title="提示" type="info" style="width: 600px;" closable>
            <p>如果未使用 NModel 预设 根节点需设置 role="dialog"。</p> 
            <p>例如：基础预设</p>
        </n-alert>
        <n-grid :cols="1" y-gap="12">
            <n-gi>
                <code-card title="基础示例" :code="baseCode">
                    <n-space vertical>
                        <n-button type="primary" @click="showBaseModal = true">
                            <template #icon>
                                <Icon icon="drag" />
                            </template>
                            基础弹窗
                        </n-button>
                    </n-space>
                </code-card>
            </n-gi>
            <n-gi>
                <code-card title="使用 card 预设" :code="cardCode">
                    <n-space vertical>
                        <n-button type="primary" @click="showCardModal = true">
                            <template #icon>
                                <Icon icon="drag" />
                            </template>
                            使用 card 预设
                        </n-button>
                    </n-space>
                </code-card>
            </n-gi>
            <n-gi>
                <code-card title="使用 dialog 预设" :code="dialogCode">
                    <n-space vertical>
                        <n-button type="primary" @click="showDialogModal = true">
                            <template #icon>
                                <Icon icon="drag" />
                            </template>
                            使用 dialog 预设
                        </n-button>
                    </n-space>
                </code-card>
            </n-gi>
        </n-grid>
        <n-modal v-model:show="showBaseModal" style="width: 500px;">
            <n-card 
                v-drag
                style="width: 600px"
                title="模态框"
                :bordered="false"
                size="huge"
                role="dialog"
                aria-modal="true"
            >
                <template #header-extra>噢！</template>
                内容
                <template #footer>尾部</template>
            </n-card>
        </n-modal>
        <n-modal
            v-model:show="showCardModal"
            preset="card"
            title="卡片预设"
            :bordered="false"
            :segmented="{ content: 'soft', footer: 'soft'}"
            style="width: 500px;"
        >
            <template #header-extra>噢！</template>
            <span v-drag>内容</span>
            <template #footer>尾部</template>
        </n-modal>
        <n-modal
            v-model:show="showDialogModal"
            preset="dialog"
            title="提示"
            positive-text="确认"
            negative-text="算了"
        >
            <span v-drag>你确认?</span>
        </n-modal>
    </div>
</template>

<script setup lang="ts">
defineOptions({
    name: "Drag",
});

const showBaseModal = $ref(false);
const showCardModal = $ref(false);
const showDialogModal = $ref(false);

const baseCode = `
<template>
    <n-button type="primary" @click="showBaseModal = true">基础弹窗</n-button>
    <n-modal v-model:show="showBaseModal" style="width: 500px;">
        <n-card v-drag style="width: 600px" title="模态框" :bordered="false" size="huge" role="dialog" aria-modal="true">
            <template #header-extra>噢！</template>
            内容
            <template #footer>尾部</template>
        </n-card>
    </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showBaseModal = ref(false);
<\/script>
`;

const cardCode = `
<template>
    <n-button type="primary" @click="showCardModal = true">使用 card 预设</n-button>
    <n-modal v-model:show="showCardModal" preset="card" title="卡片预设" :bordered="false" :segmented="{ content: 'soft', footer: 'soft'}" style="width: 500px;">
        <template #header-extra>噢！</template>
            <span v-drag>内容</span>
        <template #footer>尾部</template>
    </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showCardModal = ref(false);
<\/script>
`;

const dialogCode = `
<template>
    <n-button type="primary" @click="showDialogModal = true">使用 dialog 预设</n-button>
    <n-modal v-model:show="showDialogModal" preset="card" title="提示" positive-text="确认" negative-text="算了">
        <span v-drag>你确认?</span>
    </n-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showDialogModal = ref(false);
<\/script>
`;
</script>

<style lang="scss" scoped></style>
