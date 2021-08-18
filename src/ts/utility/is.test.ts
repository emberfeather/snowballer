import {Is} from './is';
import {assert} from 'chai';

describe('Is', () => {
  it('array datatype matching', done => {
    assert.isTrue(Is.isArray([]));
    assert.isFalse(Is.isArray(undefined));
    assert.isFalse(Is.isArray(null));
    assert.isFalse(Is.isArray(''));
    assert.isFalse(Is.isArray('foo'));
    assert.isFalse(Is.isArray(/test/));
    assert.isFalse(Is.isArray({}));
    assert.isFalse(Is.isArray(1));
    assert.isFalse(Is.isArray(true));
    assert.isFalse(Is.isArray(false));
    assert.isFalse(Is.isArray(TestClass));
    assert.isFalse(Is.isArray(new TestClass()));
    assert.isFalse(Is.isArray(new Date()));
    assert.isFalse(Is.isArray(new Date('2020-01-01')));
    assert.isFalse(Is.isArray(Symbol('test')));
    done();
  });

  it('boolean datatype matching', done => {
    assert.isTrue(Is.isBoolean(true));
    assert.isTrue(Is.isBoolean(false));
    assert.isFalse(Is.isBoolean(undefined));
    assert.isFalse(Is.isBoolean(null));
    assert.isFalse(Is.isBoolean([]));
    assert.isFalse(Is.isBoolean(''));
    assert.isFalse(Is.isBoolean('foo'));
    assert.isFalse(Is.isBoolean(/test/));
    assert.isFalse(Is.isBoolean({}));
    assert.isFalse(Is.isBoolean(1));
    assert.isFalse(Is.isBoolean(TestClass));
    assert.isFalse(Is.isBoolean(new TestClass()));
    assert.isFalse(Is.isBoolean(new Date()));
    assert.isFalse(Is.isBoolean(new Date('2020-01-01')));
    assert.isFalse(Is.isBoolean(Symbol('test')));
    done();
  });

  it('date datatype matching', done => {
    assert.isTrue(Is.isDate(new Date()));
    assert.isTrue(Is.isDate(new Date('2020-01-01')));
    assert.isFalse(Is.isDate(undefined));
    assert.isFalse(Is.isDate(null));
    assert.isFalse(Is.isDate([]));
    assert.isFalse(Is.isDate(''));
    assert.isFalse(Is.isDate('foo'));
    assert.isFalse(Is.isDate(/test/));
    assert.isFalse(Is.isDate({}));
    assert.isFalse(Is.isDate(1));
    assert.isFalse(Is.isArray(true));
    assert.isFalse(Is.isArray(false));
    assert.isFalse(Is.isDate(TestClass));
    assert.isFalse(Is.isDate(new TestClass()));
    assert.isFalse(Is.isDate(Symbol('test')));
    done();
  });

  it('function datatype matching', done => {
    assert.isTrue(Is.isFunction(() => {}));
    assert.isTrue(Is.isFunction(testFunction));
    assert.isTrue(Is.isFunction(TestClass));
    assert.isFalse(Is.isFunction(undefined));
    assert.isFalse(Is.isFunction(null));
    assert.isFalse(Is.isFunction([]));
    assert.isFalse(Is.isFunction(''));
    assert.isFalse(Is.isFunction('foo'));
    assert.isFalse(Is.isFunction(/test/));
    assert.isFalse(Is.isFunction({}));
    assert.isFalse(Is.isFunction(1));
    assert.isFalse(Is.isFunction(true));
    assert.isFalse(Is.isFunction(false));
    assert.isFalse(Is.isFunction(new TestClass()));
    assert.isFalse(Is.isFunction(new Date()));
    assert.isFalse(Is.isFunction(new Date('2020-01-01')));
    assert.isFalse(Is.isFunction(Symbol('test')));
    done();
  });

  it('number datatype matching', done => {
    assert.isTrue(Is.isNumber(0));
    assert.isTrue(Is.isNumber(100));
    assert.isTrue(Is.isNumber(-100));
    assert.isFalse(Is.isNumber(undefined));
    assert.isFalse(Is.isNumber(null));
    assert.isFalse(Is.isNumber([]));
    assert.isFalse(Is.isNumber(''));
    assert.isFalse(Is.isNumber('foo'));
    assert.isFalse(Is.isNumber(/test/));
    assert.isFalse(Is.isNumber({}));
    assert.isFalse(Is.isNumber(true));
    assert.isFalse(Is.isNumber(false));
    assert.isFalse(Is.isNumber(TestClass));
    assert.isFalse(Is.isNumber(new TestClass()));
    assert.isFalse(Is.isNumber(new Date()));
    assert.isFalse(Is.isNumber(new Date('2020-01-01')));
    assert.isFalse(Is.isNumber(Symbol('test')));
    done();
  });

  it('null datatype matching', done => {
    assert.isTrue(Is.isNull(null));
    assert.isFalse(Is.isNull(undefined));
    assert.isFalse(Is.isNull([]));
    assert.isFalse(Is.isNull(''));
    assert.isFalse(Is.isNull('foo'));
    assert.isFalse(Is.isNull(/test/));
    assert.isFalse(Is.isNull({}));
    assert.isFalse(Is.isNull(1));
    assert.isFalse(Is.isNull(true));
    assert.isFalse(Is.isNull(false));
    assert.isFalse(Is.isNull(TestClass));
    assert.isFalse(Is.isNull(new TestClass()));
    assert.isFalse(Is.isNull(new Date()));
    assert.isFalse(Is.isNull(new Date('2020-01-01')));
    assert.isFalse(Is.isNull(Symbol('test')));
    done();
  });

  it('object datatype matching', done => {
    assert.isTrue(Is.isObject({}));
    assert.isFalse(Is.isObject(undefined));
    assert.isFalse(Is.isObject(null));
    assert.isFalse(Is.isObject([]));
    assert.isFalse(Is.isObject(''));
    assert.isFalse(Is.isObject('foo'));
    assert.isFalse(Is.isObject(/test/));
    assert.isFalse(Is.isObject(1));
    assert.isFalse(Is.isObject(true));
    assert.isFalse(Is.isObject(false));
    assert.isFalse(Is.isObject(TestClass));
    assert.isFalse(Is.isObject(new TestClass()));
    assert.isFalse(Is.isObject(new Date()));
    assert.isFalse(Is.isObject(new Date('2020-01-01')));
    assert.isFalse(Is.isObject(Symbol('test')));
    done();
  });

  it('regexp datatype matching', done => {
    assert.isTrue(Is.isRegExp(/test/));
    assert.isFalse(Is.isRegExp(undefined));
    assert.isFalse(Is.isRegExp(null));
    assert.isFalse(Is.isRegExp([]));
    assert.isFalse(Is.isRegExp(''));
    assert.isFalse(Is.isRegExp('foo'));
    assert.isFalse(Is.isRegExp({}));
    assert.isFalse(Is.isRegExp(1));
    assert.isFalse(Is.isRegExp(true));
    assert.isFalse(Is.isRegExp(false));
    assert.isFalse(Is.isRegExp(TestClass));
    assert.isFalse(Is.isRegExp(new TestClass()));
    assert.isFalse(Is.isRegExp(new Date()));
    assert.isFalse(Is.isRegExp(new Date('2020-01-01')));
    assert.isFalse(Is.isRegExp(Symbol('test')));
    done();
  });

  it('string datatype matching', done => {
    assert.isTrue(Is.isString(''));
    assert.isTrue(Is.isString('foo'));
    assert.isFalse(Is.isString(undefined));
    assert.isFalse(Is.isString(null));
    assert.isFalse(Is.isString([]));
    assert.isFalse(Is.isString(/test/));
    assert.isFalse(Is.isString({}));
    assert.isFalse(Is.isString(1));
    assert.isFalse(Is.isString(true));
    assert.isFalse(Is.isString(false));
    assert.isFalse(Is.isString(TestClass));
    assert.isFalse(Is.isString(new TestClass()));
    assert.isFalse(Is.isString(new Date()));
    assert.isFalse(Is.isString(new Date('2020-01-01')));
    assert.isFalse(Is.isString(Symbol('test')));
    done();
  });

  it('symbol datatype matching', done => {
    assert.isTrue(Is.isSymbol(Symbol('test')));
    assert.isFalse(Is.isSymbol(undefined));
    assert.isFalse(Is.isSymbol(null));
    assert.isFalse(Is.isSymbol([]));
    assert.isFalse(Is.isSymbol(''));
    assert.isFalse(Is.isSymbol('foo'));
    assert.isFalse(Is.isSymbol(/test/));
    assert.isFalse(Is.isSymbol({}));
    assert.isFalse(Is.isSymbol(1));
    assert.isFalse(Is.isSymbol(true));
    assert.isFalse(Is.isSymbol(false));
    assert.isFalse(Is.isSymbol(TestClass));
    assert.isFalse(Is.isSymbol(new TestClass()));
    assert.isFalse(Is.isSymbol(new Date()));
    assert.isFalse(Is.isSymbol(new Date('2020-01-01')));
    done();
  });

  it('undefined datatype matching', done => {
    assert.isTrue(Is.isUndefined(undefined));
    assert.isFalse(Is.isUndefined(null));
    assert.isFalse(Is.isUndefined([]));
    assert.isFalse(Is.isUndefined(''));
    assert.isFalse(Is.isUndefined('foo'));
    assert.isFalse(Is.isUndefined(/test/));
    assert.isFalse(Is.isUndefined({}));
    assert.isFalse(Is.isUndefined(1));
    assert.isFalse(Is.isUndefined(true));
    assert.isFalse(Is.isUndefined(false));
    assert.isFalse(Is.isUndefined(TestClass));
    assert.isFalse(Is.isUndefined(new TestClass()));
    assert.isFalse(Is.isUndefined(new Date()));
    assert.isFalse(Is.isUndefined(new Date('2020-01-01')));
    assert.isFalse(Is.isUndefined(Symbol('test')));
    done();
  });

  // Test battery for new data type checking.
  // assert.isFalse(Is.isSomething(undefined));
  // assert.isFalse(Is.isSomething(null));
  // assert.isFalse(Is.isSomething([]));
  // assert.isFalse(Is.isSomething(''));
  // assert.isFalse(Is.isSomething('foo'));
  // assert.isFalse(Is.isSomething(/test/));
  // assert.isFalse(Is.isSomething({}));
  // assert.isFalse(Is.isSomething(1));
  // assert.isFalse(Is.isSomething(true));
  // assert.isFalse(Is.isSomething(false));
  // assert.isFalse(Is.isSomething(TestClass));
  // assert.isFalse(Is.isSomething(new TestClass()));
  // assert.isFalse(Is.isSomething(new Date()));
  // assert.isFalse(Is.isSomething(new Date('2020-01-01')));
  // assert.isFalse(Is.isSomething(Symbol('test')));

  class TestClass {}
  function testFunction() {}
});
