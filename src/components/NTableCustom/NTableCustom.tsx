import { NDataTable, type DataTableColumn } from "naive-ui";
import type { PropType } from "vue";

export default defineComponent({
    name: "NTableCustom",
    props: {
        columns: { type: Array as PropType<DataTableColumn[]>, default: () => [] },
    },
    render() {
        console.log(renderSlot(this.$slots, "default"));
        console.log(this.$slots.default?.() || []);
        return (
            <NDataTable>
                {renderSlot(this.$slots, "empty")}
            </NDataTable>
        );
    },
});
