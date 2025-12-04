# @leomotors/config

[![](https://img.shields.io/npm/v/@leomotors/config.svg?maxAge=3600)](https://www.npmjs.com/package/@leomotors/config)
[![](https://img.shields.io/npm/dt/@leomotors/config.svg?maxAge=3600)](https://www.npmjs.com/package/@leomotors/config)
[![](https://github.com/Leomotors/node-config/actions/workflows/test.yml/badge.svg)](https://github.com/Leomotors/node-config/actions)

My personal config for node projects, include ESLint Config

## Install

```bash
pnpm add -D @leomotors/config
```

## Usage

File: `eslint.config.js`

```js
import { createESLintConfig } from "@leomotors/config";
export default createESLintConfig();
```

To add other rules:

```js
import { createESLintConfig } from "@leomotors/config";
import { defineConfig } from "eslint/config";

export default defineConfig(
  ...createESLintConfig(),
  {
    files: ["**/*.ts", "**/*.svelte", "**/*.mts"],
    rules: {
      "no-undef": "off",
    },
  },
);
```
