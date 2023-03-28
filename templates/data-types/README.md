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
represent the type of data models in an application. Some data models may need
to declare additional types or constants that are commonly used elsewhere in 
the codebase.

Use the `alias` and `declare` properties respecitively. Example:

```json
{
    "alias": {"Id": "string"},
    "declare": {"STATUS_ACTIVE": "'active'"}
}
```

output:

```ts
export type Id = string;
export const STATUS_ACTIVE = 'active';
```

Both of these keys MUST be objects and each key is treated as a type alias or
const respectively. The values are outputted verbatim.
