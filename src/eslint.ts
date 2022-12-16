import { ESLintConfig, assertDeps } from "./utils";

export function config() {
  return {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
      "@typescript-eslint/eslint-plugin",
      "import",
      "sort-destructure-keys",
    ],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
    ],
    rules: {
      "prettier/prettier": "warn",
      eqeqeq: "warn",
      "no-constant-binary-expression": "error",
      "import/no-cycle": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "sort-destructure-keys/sort-destructure-keys": "warn",
    },
    overrides: [
      {
        files: [".eslintrc.*", ".prettierrc.*", "*.config.js"],
        rules: {
          "@typescript-eslint/no-var-requires": "off",
          "no-undef": "off",
        },
      },
    ],
    ignorePatterns: [
      "build",
      "dist",
      "out",
      "output",
      "generated",
      "@generated",
    ],
  } satisfies ESLintConfig;
}

interface ReactConfigOptions {
  reactVersion?: string;
}

export function reactConfig({ reactVersion }: ReactConfigOptions = {}) {
  const _config = config();

  assertDeps(["eslint-plugin-react"]);

  return {
    ..._config,
    plugins: [..._config.plugins, "react"],
    rules: {
      ..._config.rules,
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          reservedFirst: true,
        },
      ],
      "react/jsx-key": "error",
      "react/display-name": "error",
    },
    settings: {
      react: {
        version: reactVersion ?? "^18.2.0",
      },
    },
  } satisfies ESLintConfig;
}
