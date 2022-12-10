# MongoDB Search Filters

These templates generate mongodb based search filter policies meant to be used
with the '@quenk/search-filters-mongodb' package.

Note: Currently only flat fields are supported with no urgent plan to support
nested documents.

## Requirements

### Schema
The `model.nunjucks` template reads the `filterAs` value on each field in
the schema to generate the filter policy. Note that this template is meant to
generate string based filter policy pointers and not the actual policy itself.

Where there is no `filterAs` property the field is treated as not being 
filterable.

For `index.nunjucks` the document must have a `schemaNames` property that is
a comma separated string containing the normalized names of each schema. These
must correspond to the module names you generated.
