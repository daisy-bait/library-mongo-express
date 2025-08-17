import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js: eslint, ts: tseslint.plugin, },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      "semi": "error",
      "@typescript-eslint/no-extraneous-class": "off",
    },
  },
  tseslint.configs.strictTypeChecked,
]);
