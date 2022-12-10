# MongoDB Models

These templates generate mongodb models based on `@quenk/dback-mongodb-models.`
Most of the implementation logic is in that module.

## Requirements

### Plugins
1. `@quenk/dagen-commons/lib/plugins/imports`

### Schema
For `index.nunjucks` the document must have a `schemaNames` property that is
a comma separated string containing the normalized names of each schema. These
must correspond to the module names you generated.
