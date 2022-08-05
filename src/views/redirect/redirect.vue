<script lang="ts">
export default defineComponent({
    name: "Redirect",
    setup() {
        const route = useRoute();
        const router = useRouter();
        const mitter = useMitt();

        onBeforeMount(() => {
            if(!route.params.path) {
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
