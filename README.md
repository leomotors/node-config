# @leomotors/config

My personal config for node projects, include ESLint Prettier and TSConfig

## Install

```bash
pnpm add -D @leomotors/config
```

Install peer dependencies too (auto-install-peers might not work here in some cases)

```bash
pnpm add -D @types/eslint @typescript-eslint/parser eslint-plugin-sort-destructure-keys \
  @types/node eslint-config-prettier eslint \
  @types/prettier eslint-plugin-import \
  @typescript-eslint/eslint-plugin eslint-plugin-prettier
```

More peer dependencies are needed for some preset

```bash
pnpm add -D @ianvs/prettier-plugin-sort-imports eslint-config-next \
  eslint-plugin-jsx-a11y eslint-plugin-react \
  eslint-plugin-react-hooks prettier-plugin-tailwindcss
```

Some config require extra dependencies
