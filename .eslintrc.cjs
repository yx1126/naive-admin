/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-typescript/recommended"],
    env: {
        "vue/setup-compiler-macros": true,
    },
    rules: {
        indent: "off",
        "@typescript-eslint/indent": ["warn", 4],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "vue/multi-word-component-names": "off",
    },
    globals: {
        $: "readonly",
        $$: "readonly",
        $ref: "readonly",
        $computed: "readonly",
        $shallowRef: "readonly",
        $customRef: "readonly",
        $toRef: "readonly",
        defineOptions: "readonly",
    },
};
