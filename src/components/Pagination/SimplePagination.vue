<template>
    <div class="paging">
        <slot name="prefix" :total="total" :page="page" :size="size" :page-count="pageCount" />
        <n-button class="button prev" size="small" :disabled="page <= 1" @click="onPageChange('prev')">
            <template #icon><Icon :size="16" icon="arrow-left" /></template>
        </n-button>
        <n-button class="button next" size="small" :disabled="page >= pageCount" @click="onPageChange('next')">
            <template #icon><Icon :size="16" icon="arrow-right" /></template>
        </n-button>
        <n-input
            v-if="showJumper"
            v-model:value="jumpNum"
            class="jump"
            size="small"
            :allow-input="onlyAllowNumber"
            placeholder=""
            @blur="onJump"
            @keydown.enter="onJump"
        />
        <slot name="suffix" :total="total" :page="page" :size="size" :page-count="pageCount" />
    </div>
</template>

<script lang="ts">
export default defineComponent({
    name: "SimplePagination",
    props: {
        page: { type: Number, default: 0 },
        size: { type: Number, default: 10 },
        total: { type: Number, default: 0 },
        showJumper: { type: Boolean, default: false },
    },
    emits: ["update:page", "update:size"],
    setup(props, { emit }) {
        const jumpNum = ref("");
        const pageCount = computed(() => Math.ceil(props.total / props.size));

        function onJump() {
            if(!jumpNum.value) return;
            const jump = Number(jumpNum.value);
            emit("update:page", jump < 1 ? 1 : jump > pageCount.value ? pageCount.value as number : jump);
            jumpNum.value = "";
        }

        function onlyAllowNumber(value: string) {
            return !value || /^\d+$/.test(value);
        }

        function onPageChange(type: "prev" | "next") {
            switch(type) {
                case "prev":
                    emit("update:page", props.page - 1);
                    break;
                case "next":
                    emit("update:page", props.page + 1);
                    break;
            }
        }
        return {
            jumpNum,
            pageCount,
            onJump,
            onlyAllowNumber,
            onPageChange,
        };
    },
});

</script>

<style lang="scss" scoped>
.paging {
    display: flex;
    align-items: center;
    gap: 0 8px;
    .button {
        width: 28px;
    }
    .jump {
        width: 60px;
    }
}
</style>
