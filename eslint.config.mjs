import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 12,
        sourceType: "script",

        parserOptions: {
            project: "tsconfig.eslint.json",
        },
    },

    rules: {
        "prefer-const": "error",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-unused-params": "off",
    },
}, {
    files: ["tests/**/*.ts"],

    languageOptions: {
        globals: {
            ...globals.jest,
            ...globals.node,
        },
    },
}];