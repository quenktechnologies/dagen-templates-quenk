# Remote Models

These templates generate frontend model classes based on the `@quenk/jouvert`
HttpModel APIs. See the documentation for those APIs for more info.


## Requirements

### Schema
The `model.nunjucks` template expects a `paths` object which is based on the
paths type in jouvert. When it is not specified, a default placeholder one is
generated instead.
