# Data Validators

The `data-validators` templates are used to generate APIs for the synchronous
validation of data. If you need to do things like accessing databases or
consulting remote APIs, use data-checks instead.

These templates contain three main template files:
1. `type.nunjucks`  - Generates a `validate` and `validatePartial` function using
                      `@quenk/preconditions` for each schema used with.
2. `index.nunjucks` - Generates `getValidatorsFor` and `getPartialValidatorFor`
                      for your module's index file. These take name of a schema
                      and provide the relevant preconditon.
3. `test.nunjucks`  - Generates a file for testing a schema.

## Requirements

### Plugins
1. `@quenk/dagen-commons/lib/plugins/imports`
2. `@quenk/dagen-commons/lib/plugins/validation`

### Schema
For `index.nunjucks` the document must have a `schemaNames` property that is
a comma separated string containing the normalized names of each schema. These
must correspond to the module names you generated.
