export function defaultImportOrder(orgName = "repo") {
  return [
    // Side effect imports.
    "^\\u0000",
    // Node.js builtins prefixed with `node:`.
    "^node:",
    // Packages. Things that start with a letter (or digit or underscore), or `@` followed by a letter.
    "^@?\\w",
    // Absolute imports within same package.
    "^\\$?\\w",
    // Internal Packages. Things that start with a letter (or digit or underscore), or `@repo` followed by a letter.
    `^@${orgName}?\\w`,
    // Absolute imports and other imports such as Vue-style `@/foo`.  Anything not matched in another group.
    "^",
    // Relative imports. Anything that starts with a dot.
    "^\\.",
  ];
}
