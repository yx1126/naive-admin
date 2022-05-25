import "vue";

declare module "vue" {
    interface CSSProperties {
        // src/Layout/components/Logo.vue
        [key: `--${string}`]: string | number;
    }
}
