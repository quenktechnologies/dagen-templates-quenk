/**
 * AUTOGENERATED - DO NOT EDIT DIRECTLY!
 */ 
import * as mongodb from 'mongodb';
import * as _post from './post';
import * as _schemanames from './schema-names';
import * as _user from './user';

import { Maybe, fromNullable } from '@quenk/noni/lib/data/maybe';

import { 
  Model, 
  ModelMap, 
  ModelGetter as _ModelGetter 
} from '@quenk/backend/lib/app/model';

/**
 * DataTypeUnion combines all the model data types found in this module
 * (AUTOGENERATED).
 */
export type DataTypeUnion =
  
    _post.DataType |
  
    _schemanames.DataType |
  
    _user.DataType ;

/**
 * ModelGetter is a function that provides an instance of a Model.
 */
export type ModelGetter = _ModelGetter<mongodb.Db, DataTypeUnion>;

/**
 * Models map.
 */
export type Models = ModelMap<mongodb.Db, DataTypeUnion>;

/**
 * modelsAvailable from this module.
 */
export const modelsAvailable:Models = {


    'post': <ModelGetter>_post.ModelImpl.getInstance,

    'schemaNames': <ModelGetter>_schemanames.ModelImpl.getInstance,

    'user': <ModelGetter>_user.ModelImpl.getInstance

};

/**
 * getInstance of a Model from this module using its name.
 *
 * The returned Model may not be completely type safe.
 */
export const getInstanceOf =
(db:mongodb.Db, name:string) : Maybe<Model<DataTypeUnion>> => 
  fromNullable(modelsAvailable[name]).map(f => f(db));

