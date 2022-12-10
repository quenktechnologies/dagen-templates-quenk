# Data Types

These templates generate a typescript file that exports a single interface
definition that corresponds to a schema.

Example Output:

```sh
import * as _json from '@quenk/noni/lib/data/jsonx';

export interface Post extends _json.Object {

  [key:string]: _json.Value

    'id'? : number,

    'title'? : string,

    'body'? : string,

    'tags'? : string[],

    'created_on'? : DateTime,

    'created_by'? : string|      number

}
```

These definitions are usually used throughout the front-end and back-end to 
represent the type of data models in an application.
