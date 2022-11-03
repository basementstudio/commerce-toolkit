# @bsmnt/sdk-gen

## 1.2.4

### Patch Changes

- 75198f9: * Add `dedupeFragments` to codegen config. *It cleans the generated schema to avoid recurrent references to the same fragment in one query.\*

  > Issue related: https://github.com/dotansimha/graphql-code-generator/issues/3063

## 1.2.3

### Patch Changes

- 687fd41: Access `fetch` from `globalThis` instead of `global`, as using `global` is unreliable.

## 1.2.2

### Patch Changes

- e274b6f: include graphql as a prod dependency to sdk-gen (knowing that it'll be installed as a `devDependency`

## 1.2.1

### Patch Changes

- c0c1a8d: Add @ts-nocheck on generated code, as it may fail due to different tsconfigs

## 1.2.0

### Minor Changes

- f772e72: Just some cleanup to prepare for public release

## 1.0.0

### Major Changes

- Remove engines property from package.json
