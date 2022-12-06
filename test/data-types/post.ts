import { DateTime } from './date-time';
import * as _json from '@quenk/noni/lib/data/jsonx';

/**
 * Post type (AUTO GENERATED).
 *
 * This is a post type. 
 */
export interface Post extends _json.Object {

  [key:string]: _json.Value

    'id'? : number,

    'title'? : string,

    'body'? : string,

    'tags'? : string[],

    'created_on'? : DateTime,

    'created_by'? : string|      number

  }


