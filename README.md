# @leomotors/config

[![](https://img.shields.io/npm/v/@leomotors/config.svg?maxAge=3600)](https://www.npmjs.com/package/@leomotors/config)
[![](https://img.shields.io/npm/dt/@leomotors/config.svg?maxAge=3600)](https://www.npmjs.com/package/@leomotors/config)
[![](https://github.com/Leomotors/node-config/actions/workflows/test.yml/badge.svg)](https://github.com/Leomotors/node-config/actions)

My personal config for node projects, include ESLint Prettier and TSConfig

## Install

```bash
pnpm add -D @leomotors/config
```

Install peer dependencies too (auto-install-peers might not work here in some cases)

```bash
pnpm add -D @types/eslint @typescript-eslint/parser eslint-plugin-sort-destructure-keys \
  @types/node@18 eslint-config-prettier \
  eslint eslint-plugin-import \
  @typescript-eslint/eslint-plugin eslint-plugin-prettier
```

More peer dependencies are needed for some preset

```bash
pnpm add -D @trivago/prettier-plugin-sort-imports eslint-config-next \
  eslint-plugin-jsx-a11y eslint-plugin-react \
  eslint-plugin-react-hooks prettier-plugin-tailwindcss
```

Some config require extra dependencies
