<script lang="ts">
import { defineComponent, h, onBeforeMount, onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMitt } from "@/hooks";

export default defineComponent({
    name: "Redirect",
    setup() {
        const route = useRoute();
        const router = useRouter();
        const mitter = useMitt();

        onBeforeMount(() => {
            if (!route.params.path) {
                router.replace("");
                return;
            }
            router.replace({ path: `/${(route.params.path as string[]).join("/")}`, query: route.query });
        });

        onBeforeUnmount(() => {
            mitter.emit("keepAlive", "");
        });
    },
    render() {
        return h("span");
    },
});
</script>
