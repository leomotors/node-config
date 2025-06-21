/**
 * Side effect imports.
 */
export const sideEffectImports = "^\\u0000";
/**
 * Node.js builtins prefixed with `node:`.
 */
export const builtInNodeImports = "^node:";
/**
 * Packages. Things that start with a letter (or digit or underscore), or `@` followed by a letter.
 */
export const packageImports = "^@?\\w";
/**
 * Absolute imports within same package.
 */
export const samePackageAbsoluteImports = "^\\$?\\w";
/**
 * Internal Packages. Things that start with `@repo` followed by a letter.
 * @param orgName
 * @returns
 */
export const orgPackageImports = (orgName: string) => `^@${orgName}?\\w`;
/**
 * Absolute imports and other imports such as Vue-style `@/foo`.  Anything not matched in another group.
 */
export const otherStyleImports = "^";
/**
 * Relative imports. Anything that starts with a dot.
 */
export const relativeImports = "^\\.";

export function defaultImportOrder(orgName = "repo") {
  return [
    sideEffectImports,
    builtInNodeImports,
    packageImports,
    samePackageAbsoluteImports,
    orgPackageImports(orgName),
    otherStyleImports,
    relativeImports,
  ];
}
