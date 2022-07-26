/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-typescript/recommended", "plugin:vue/vue3-recommended"],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    plugins: ["vue", "@typescript-eslint"],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: "2020",
        sourceType: "module",
        jsxPragma: "React",
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
    // 将重载的成员分组在一起可以提高代码的可读性
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "indent": "off",
        "@typescript-eslint/indent": ["error", 4, {
            "ignoredNodes": ["ConditionalExpression"],
            "SwitchCase": 1,
            "VariableDeclarator": "first",
            "ArrayExpression": 1,
            "ObjectExpression": 1,
            "ImportDeclaration": 1,
            "flatTernaryExpressions": false,
            "offsetTernaryExpressions": true,
        }],
        "vue/html-indent": ["error", 4],
        "vue/script-indent": ["error", 4, {
            baseIndent: 0,
            switchCase: 1,
        }],
        "@typescript-eslint/no-explicit-any": "off",
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": ["error"],
        "func-call-spacing": "off",
        "@typescript-eslint/func-call-spacing": ["error", "never"],
        "@typescript-eslint/no-non-null-assertion": "off",
        "vue/multi-word-component-names": "off",
        "quotes": "off",
        "@typescript-eslint/quotes": ["error", "double", { "allowTemplateLiterals": true }],
        "semi": "off",
        "@typescript-eslint/semi": ["error"],
        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": ["error"],
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
        "vue/html-quotes": [ "error", "double", { "avoidEscape": true } ],
        "vue/max-attributes-per-line": ["error", {
            "singleline": {
                "max": 12,
            },
            "multiline": {
                "max": 1,
            },
        }],
        "vue/require-default-prop": "off",
        "vue/v-slot-style": ["error", {
            "atComponent": "shorthand" ,
            "default": "shorthand" ,
            "named": "shorthand",
        }],
        "vue/no-v-html": "off",
        "vue/singleline-html-element-content-newline": "off",
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
