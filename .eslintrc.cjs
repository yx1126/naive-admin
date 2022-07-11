/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-typescript/recommended", "@vue/eslint-config-prettier"],
    env: {
        "vue/setup-compiler-macros": true,
    },
    rules: {
        "prettier/prettier": "warn",
        indent: "off",
        "@typescript-eslint/indent": ["error", 4],
        "@typescript-eslint/no-explicit-any": "off",
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
