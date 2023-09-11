// eslint-disable-next-line @typescript-eslint/ban-ts-comment
require("@rushstack/eslint-patch/modern-module-resolution");
const { defineConfig } =  require("eslint-define-config");
const process = require("node:process");

process.env.ESLINT_TSCONFIG = "tsconfig.json";

module.exports = defineConfig({
    extends: [
        "@yx1126/eslint-config",
    ],
});
