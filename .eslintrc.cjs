// eslint-disable-next-line @typescript-eslint/ban-ts-comment
require("@rushstack/eslint-patch/modern-module-resolution");
const { defineConfig } =  require("eslint-define-config");

module.exports = defineConfig({
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: "latest",
        sourceType: "module",
        jsxPragma: "React",
        ecmaFeatures: {
            jsx: true,
            tsx: true,
        },
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "@vue/eslint-config-typescript/recommended",
    ],
    plugins: ["vue", "@typescript-eslint"],
    overrides: [
        {
            files: ["*.ts"],
            rules: {
                "indent": "off",
                "quotes": "off",
                "@typescript-eslint/indent": ["error", 4],
            },
        },
    ],
    rules: {
        "no-undef": "off",
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
        "quotes": ["error", "double", { "allowTemplateLiterals": true }],
        "@typescript-eslint/quotes": ["error", "double", { "allowTemplateLiterals": true }],
        "semi": "off",
        "@typescript-eslint/semi": ["error"],
        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": ["error"],
        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
        "vue/html-quotes": ["error", "double", { "avoidEscape": true }],
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
            "atComponent": "shorthand",
            "default": "shorthand",
            "named": "shorthand",
        }],
        "vue/no-v-html": "off",
        "vue/singleline-html-element-content-newline": "off",
        "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^no_" }],
        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always",
        }],
        "no-useless-escape": "off",
        "max-len": ["error", {
            code: 200,
        }],
        "array-bracket-spacing": "error",
        "block-spacing": "error",
        "brace-style": "off",
        "@typescript-eslint/brace-style": ["error"],
        "comma-spacing": "off",
        "@typescript-eslint/comma-spacing": ["error"],
        "comma-style": "error",
        "computed-property-spacing": "error",
        "key-spacing": ["error", {
            "mode": "strict",
        }],
        "keyword-spacing": ["error", {
            overrides: {
                "if": { "after": false },
                "for": { "after": false },
                "while": { "after": false },
            },
        }],
        "object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": ["error", "always"],
        "space-before-blocks": "off",
        "@typescript-eslint/space-before-blocks": ["error"],
        "@typescript-eslint/type-annotation-spacing": ["error"],
        "@typescript-eslint/member-delimiter-style": ["error"],
        "vue/one-component-per-file": "off",
    },
    globals: {
        defineOptions: "readonly",
    },
});
