<template>
    <div class="message">
        <template v-for="i in value" :key="i">
            <h2>{{ i }}</h2>
        </template>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    props: {
        value: {
            type: Number,
            default: 5,
        },
    },
    setup() {
        return {};
    },
});
</script>

<style lang="scss" scoped>
.message {
    color: red;
}
</style>
