<script lang="ts">
import { defineComponent, h } from "vue";
import SvgIcon from "../SvgIcon";

const iconPrefixReg = /^[a-z]{1,}-icon-/;

export default defineComponent({
    name: "Icon",
    props: {
        icon: {
            type: String,
            default: void 0,
        },
    },
    setup() {
        return {};
    },
    render() {
        return !this.icon ? null : iconPrefixReg.test(this.icon) ? h("div", { class: this.icon }) : h(SvgIcon, { icon: this.icon });
    },
});
</script>
