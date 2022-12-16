export const orderDefault = [
  "^react",
  "^next",
  "^@",
  "^\\$",
  "<THIRD_PARTY_MODULES>",
  "^[.][.]",
  "^[.]",
];

export const orderNest = [
  "^@nestjs",
  "<THIRD_PARTY_MODULES>",
  "^src/",
  "^./prisma",
  "^./app",
  "^[.][.]",
  "^[.]",
];

export function orderNestWithOrg(org: string) {
  return [
    "^@nestjs",
    "<THIRD_PARTY_MODULES>",
    `^@${org}`,
    "^src/",
    "^./prisma",
    "^./app",
    "^[.][.]",
    "^[.]",
  ];
}

export const orderNext = [
  "^react",
  "^next",
  "<THIRD_PARTY_MODULES>",
  "^\\$",
  "^\\$styles",
  "^[.][.]",
  "^[.]",
];

export function orderNextWithOrg(org: string) {
  return [
    "^react",
    "^next",
    "<THIRD_PARTY_MODULES>",
    `^@${org}`,
    "^\\$",
    "^\\$styles",
    "^[.][.]",
    "^[.]",
  ];
}
