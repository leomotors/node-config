import { PrettierConfig, SortImportsConfig } from "../utils";

import { orderDefault } from "./importOrders";

export function config() {
  return {
    bracketSpacing: true,
    tabWidth: 2,
    useTabs: false,
    singleQuote: false,
    semi: true,
    printWidth: 80,
  } satisfies PrettierConfig;
}

interface WithSortImportsOptions {
  importOrder?: string[];
}

export function withSortImports({ importOrder }: WithSortImportsOptions = {}) {
  return {
    ...config(),
    plugins: ["@trivago/prettier-plugin-sort-imports"],
    importOrder: importOrder ?? orderDefault,
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderParserPlugins: ["typescript", "decorators-legacy", "jsx"],
  } satisfies SortImportsConfig;
}
