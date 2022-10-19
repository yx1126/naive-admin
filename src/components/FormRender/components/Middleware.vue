<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "Middleware",
    props: {
        value: {
            type: [String, Number, Object, Array, Boolean, Date, Function, Symbol],
            default: void 0,
        },
        onUpdateValue: {
            type: Function,
            default: void 0,
        },
    },
    emits: ["update:value"],
    setup(props, { emit }) {

        function updateValue(value: any) {
            const { onUpdateValue } = props;
            emit("update:value", value);
            if(onUpdateValue) onUpdateValue(value);
        }

        return {
            updateValue,
        };
    },
    render() {
        const { $slots, value, updateValue } = this;
        return renderSlot($slots, "default", {
            value,
            onUpdateValue: updateValue,
        });
    },
});
</script>

