# MongoDB Fields

These templates generate mongodb fields to be used in projection. In a nutshell,
all fields of the schema are included except the ones that specify `hidden:true`.

Note: Currently only flat fields are supported with no urgent plan to support
nested documents.

## Requirements

### Schema
For `index.nunjucks` the document must have a `schemaNames` property that is
a comma separated string containing the normalized names of each schema. These
must correspond to the module names you generated.
