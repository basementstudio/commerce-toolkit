---
"@bsmnt/sdk-gen": patch
---

 * Add `dedupeFragments` to codegen config. *It cleans the generated schema to avoid recurrent references to the same fragment in one query.*
 
 > Issue related: https://github.com/dotansimha/graphql-code-generator/issues/3063
