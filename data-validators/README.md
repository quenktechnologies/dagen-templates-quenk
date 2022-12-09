
These templates contain two main files `type.nunjucks` and `index.nunjucks`.
The type file is used to generate preconditions for full and partial validation
of a single schema. The index file is used to generate a file that exports
factory functions for accessing full and partial validators of all schema by
normalized name.

## Requirements

Plugins:
1. `@quenk/dagen-commons/lib/plugins/imports`
2. `@quenk/dagen-commons/lib/plugins/validation`

Schema:
For `index.nunjucks` the document must have a `schemaNames` property that is
a string containing the normalized names of each schema separated by space.
