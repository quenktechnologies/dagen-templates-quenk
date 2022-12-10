/**
 * AUTOGENERATED - DO NOT EDIT DIRECTLY!
 */ 

import { User } from '../data-types/user';
import { name,range,email,tag,date } from '../data-validators/validators';
import * as _json from '@quenk/noni/lib/data/jsonx';
import * as _prec from '@quenk/preconditions';
import * as _numberPrec from '@quenk/preconditions/lib/number';
import * as _stringPrec from '@quenk/preconditions/lib/string';
import * as _recordPrec from '@quenk/preconditions/lib/record';
import * as _arrayPrec from '@quenk/preconditions/lib/array';

/**
 * DataType validated.
 * 
 * Used by template generation.
 * @private 
 */
export type DataType = User;

//@ts-ignore: 6133
const _boolean = _booleanPrec.toBoolean;

//@ts-ignore: 6133
const _number = _numberPrec.toNumber;

//@ts-ignore: 6133
const _string:_prec.Precondition<_json.Value, string> =
_prec.and(_stringPrec.isString, _stringPrec.trim);


/**
 * fieldValidators for User (AUTOGENERATED).
 */ 
export const fieldValidators: _prec.Preconditions<_json.Value, _json.Value> = {
      'username' : _prec.and(_prec.notNull,       _prec.and(    _string
,
      _prec.every<_json.Value,_json.Value>(name))
),

      'email' : _prec.and(_prec.notNull,       _prec.and(    _string
,
      _prec.every<_json.Value,_json.Value>(range(3,20),email))
),

      'tags' : _prec.and(_prec.notNull,     _prec.and(_arrayPrec.isArray, _arrayPrec.map(_prec.optional(      _prec.and(    _string
,
      _prec.every<_json.Value,_json.Value>(tag))
)))),

      'last_login' : _prec.and(_prec.notNull,       _prec.and(    _string
,
      _prec.every<_json.Value,_json.Value>(date))
)

};

/**
 * partialFieldValidators for User (AUTOGENERATED).
 */ 
export const partialFieldValidators:_prec.Preconditions<_json.Value, _json.Value> = {
      'username' : _prec.and(_prec.notNull,       _prec.and(    _string
,
      _prec.every<_json.Value,_json.Value>(name))
),

      'email' : _prec.and(_prec.notNull,       _prec.and(    _string
,
      _prec.every<_json.Value,_json.Value>(range(3,20),email))
),

      'tags' : _prec.and(_prec.notNull,     _prec.and(_arrayPrec.isArray, _arrayPrec.map(_prec.optional(      _prec.and(    _string
,
      _prec.every<_json.Value,_json.Value>(tag))
)))),

      'last_login' : _prec.and(_prec.notNull,       _prec.and(    _string
,
      _prec.every<_json.Value,_json.Value>(date))
)

};

/**
 * validate a value to determine if it satisfies the User type
 * (AUTOGENERATED).
 */
export const validate: _prec.Precondition<_json.Value, User> =
 _prec.and(
  _recordPrec.isRecord, 
  _recordPrec.restrict<_json.Value, _json.Value, User>(fieldValidators)
 );

/**
 * validatePartial is like validate but only tests the fields encountered
 * (AUTOGENERATED).
 */
export const validatePartial: _prec.Precondition<_json.Value, Partial<User>> =
 _prec.and(
  _recordPrec.isRecord, 
  _recordPrec.intersect<_json.Value, _json.Value, User>(partialFieldValidators)
 );

