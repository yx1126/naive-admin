<script lang="ts">
import { defineComponent, h, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
    name: "Redirect",
    setup() {
        const route = useRoute();
        const router = useRouter();
        onBeforeMount(() => {
            router.replace({ path: "/" + route.params.path, query: route.query });
        });
    },
    render() {
        return h("span");
    },
});
</script>
