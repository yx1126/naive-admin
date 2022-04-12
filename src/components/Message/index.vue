<script lang="ts">
import { defineCustomElement, h, defineComponent } from "vue";
export default defineComponent({
    props: {
        value: {
            type: Number,
            default: 10,
        },
    },
    render() {
        return h(
            "div",
            {
                class: "message",
            },
            Array.from({ length: this.value }).map((i) => h("p", "test-" + i))
        );
    },
});
</script>

<style lang="scss" scoped>
.message {
    p {
        color: red;
    }
}
</style>
