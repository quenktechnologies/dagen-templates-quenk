# Data Checks

This module is similar to `data-validators` except the preconditions are all
async.

## Requirements

### Plugins
1. `@quenk/dagen-commons/lib/plugins/imports`
2. `@quenk/dagen-commons/lib/plugins/checks`

### Schema
The `type.nunjucks` schema expects you to import the `validate` and 
`validatePartial` functions into the schema. The corresponding TypeScript type
should also be imported.

For `index.nunjucks` the document must have a `schemaNames` property that is
a comma separated string containing the normalized names of each schema. These
must correspond to the module names you generated.
