// AUTOGENERATED, DO NOT EDIT DIRECTLY! 

import * as _post from './post';
import * as _user from './user';

import { Record } from '@quenk/noni/lib/data/record';
import { Value } from '@quenk/noni/lib/data/jsonx';
import { Maybe, fromNullable } from '@quenk/noni/lib/data/maybe';

import { Precondition } from '@quenk/preconditions';

/**
 * DataTypeUnion combines all the validator data types found in this module
 * (AUTOGENERATED).
 */
export type DataTypeUnion =
  
    _post.DataType |
  
    _user.DataType ;

/**
 * ValidatorMap is a record mapping normalized model names to their respective 
 * validator (AUTOGENERATED).
 */
export interface ValidatorMap 
  extends 
  Record<Precondition<Value, DataTypeUnion>>{}

/**
 * validatorsAvailable from this module (AUTOGENERATD).
 */
export const validatorsAvailable:ValidatorMap = {


    'post': _post.validate,

    'user': _user.validate

};

/**
 * getValidatorFor provides a validator from this module (AUTOGENERATED).
 */
export const getValidatorsFor = 
 (name: string): Maybe<Precondition<Value, DataTypeUnion>> => 
 fromNullable(validatorsAvailable[name]);

/**
 * partialValidatorsAvailable from this module (AUTOGENERATED).
 */
export const partialValidatorsAvailable:ValidatorMap = {


  'post': _post.validatePartial,

  'user': _user.validatePartial

};

/**
 * getPartialvalidatorsFor provides a validator from this module (autogenerated).
 */
export const getPartialValidatorsFor = 
 (name:string): Maybe<Precondition<Value, DataTypeUnion>> => 
 fromNullable(partialValidatorsAvailable[name]);

