import { NForm, NGrid, NFormItem, NFormItemGi } from "naive-ui";
import type { PropType } from "vue";

export default defineComponent({
    name: "BasicForm",
    inheritAttrs: false,
    props: {
        model: { type: Object, default: () =>({}) },
        grid: { type: Boolean, default: false },
        cols: { type: [Number, String], default: 1 },
        collapsed: { type: Boolean, default: false },
        collapsedRows: { type: Number, default: 1 },
        responsive: { type: String as PropType<"self" | "screen">, default: "self" },
        itemResponsive: { type: Boolean, default: false },
        xGap: { type: [Number, String], default: 0 },
        yGap: { type: [Number, String], default: 0 },
        labelPlacement: { type: String as PropType<"left" | "top">, default: "left" },
    },
    setup() {

        const nFormRef = ref<InstanceType<typeof NForm> | null>(null);

        return {
            nFormRef,
        };
    },
    render() {
        // const defaultSlots = (this.$slots.default?.() || []).map(item => {
        //     console.log(item);
        //     // const childrenVNodes = {
        //     //     default: () => renderSlot(item.children as any, "default"),
        //     //     feedback: () => renderSlot(item.children as any, "feedback"),
        //     //     label: () => renderSlot(item.children as any, "label"),
        //     // };
        //     return item.type === NFormItemGi ? <NFormItem {...mergeProps(item.props as any)}>{item.children}</NFormItem> : item;
        // });
        const NGridVNode = (
            <NGrid
                cols={this.cols}
                collapsed={this.collapsed}
                collapsedRows={this.collapsedRows}
                responsive={this.responsive}
                itemResponsive={this.itemResponsive}
                xGap={this.xGap}
                yGap={this.yGap}
            >
                {renderSlot(this.$slots, "default")}
            </NGrid>
        );
        return (
            <NForm ref="nFormRef" model={this.model} labelPlacement={this.labelPlacement} {...mergeProps(this.$attrs)}>
                { this.grid ? NGridVNode : renderSlot(this.$slots, "default")}
            </NForm>
        );
    },
});
