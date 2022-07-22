<script lang="ts">
import { defineComponent, h, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
    name: "Redirect",
    setup() {
        const route = useRoute();
        const router = useRouter();
        onBeforeMount(() => {
            if (!route.params.path) {
                router.replace("");
                return;
            }
            router.replace({ path: route.params.path as string, query: route.query });
        });
    },
    render() {
        return h("span", 123);
    },
});
</script>
