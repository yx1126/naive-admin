<script lang="ts">
import { useLoadingBar, useDialog, useMessage, useNotification } from "naive-ui";

export default defineComponent({
    setup() {
        const loadingBar = useLoadingBar();
        const dialog = useDialog();
        const message = useMessage();
        const notification = useNotification();
        const mitt = useMitt();

        onBeforeMount(() => {
            // loading bar
            mitt.on("loadingbar", cb => cb(loadingBar));
            mitt.on("dialog", cb => cb(dialog));
            mitt.on("message", cb => cb(message));
            mitt.on("notification", cb => cb(notification));
        });
        return {};
    },
    render() {
        return null;
    },
});
</script>
