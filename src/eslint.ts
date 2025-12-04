import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

import { defaultIgnores } from "./ignores.js";
import { defaultImportOrder } from "./importOrder.js";

export type CreateESLintOption = {
  importOrder?: string[];
  ignores?: string[];
};

export function createESLintConfig({
  importOrder = defaultImportOrder(),
  ignores = defaultIgnores,
}: CreateESLintOption = {}) {
  return defineConfig(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
      plugins: {
        "unused-imports": unusedImports,
      },
      rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "warn",
          {
            vars: "all",
            varsIgnorePattern: "^(_|\\$)",
            args: "after-used",
            argsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
          },
        ],
      },
    },
    {
      plugins: {
        "simple-import-sort": simpleImportSort,
      },
      rules: {
        "simple-import-sort/exports": "error",
        "simple-import-sort/imports": [
          "error",
          {
            groups: importOrder.map((x) => [x]),
          },
        ],
      },
    },
    {
      ignores,
    },
    eslintPluginPrettierRecommended,
  );
}
