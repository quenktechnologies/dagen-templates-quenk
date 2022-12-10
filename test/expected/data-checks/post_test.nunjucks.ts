// AUTOGENERATED - DO NOT EDIT MANUALLY!

import tests from './data/user';

import { assert } from '@quenk/test/lib/assert';

import { Value } from '@quenk/noni/lib/data/jsonx';
import { doFuture, voidPure } from '@quenk/noni/lib/control/monad/future';

import { Precondition } from '@quenk/preconditions/lib/async';

import { check, checkPartial } from 'user';

/**
 * TestDataSet groups the TestData into "check" and "checkPartial" targets.
 */ 
export interface TestDataSet {

  check: TestData[]

  checkPartial: TestData[]

}

/**
 * TestData used to generate dynamic tests.
 */ 
export interface TestData {

 /**
  * input to be checked.
  */
 input: Value,

 /**
  * success should be specified if `input` is expected to be correct.
  */
 success?: Object,

 /**
  * failure should be specified if `input` is expected to be incorrect.
  */
 failure?: object

}

const runTest = (test: TestData, func: Precondition<Value, Value>) => 
  doFuture(function *() {

    let eresult = yield func(test.input);

      if(test.success) {

      assert(eresult.isRight()).true();

      assert(eresult.takeRight()).equate(test.success);

    } else {

      assert(eresult.isLeft()).true();

      assert(eresult.takeLeft().explain({})).equate(test.failure);

    }

    return voidPure;

  });

/**
 * Tests for Post checks.
 */
describe('Post', ()=> {

  describe('check', ()=> {

    tests.check.forEach(test => {

    it(`Input: ${JSON.stringify(test.input, null, 2)}`, ()=>
      runTest(test, check));

      });
  });

  describe('checkPartial', ()=> {

    tests.checkPartial.forEach(test => {

      it(`checkPartial: ${JSON.stringify(test.input, null, 2)}`, ()=>
        runTest(test, checkPartial));

    });

  });

});
