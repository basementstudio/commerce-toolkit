---
"@bsmnt/sdk-gen": patch
---

Add optional params to sdk-gen config.

- MaybeValue: Set type for Maybe in the generated file. Accepts a string.
- InputMaybeValue: Set type for InputMaybe in the generated file. Accepts a string.
- AvoidOptionals: If true it disables optional types on the generated schema. Accepts true or false.
