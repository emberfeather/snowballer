import {Is} from './is';
import {assert} from 'chai';

describe('Is', () => {
  it('array datatype matching', done => {
    assert.isTrue(Is.array([]));
    assert.isFalse(Is.array(undefined));
    assert.isFalse(Is.array(null));
    assert.isFalse(Is.array(''));
    assert.isFalse(Is.array('foo'));
    assert.isFalse(Is.array(/test/));
    assert.isFalse(Is.array({}));
    assert.isFalse(Is.array(1));
    assert.isFalse(Is.array(true));
    assert.isFalse(Is.array(false));
    assert.isFalse(Is.array(TestClass));
    assert.isFalse(Is.array(new TestClass()));
    assert.isFalse(Is.array(new Date()));
    assert.isFalse(Is.array(new Date('2020-01-01')));
    assert.isFalse(Is.array(Symbol('test')));
    done();
  });

  it('boolean datatype matching', done => {
    assert.isTrue(Is.boolean(true));
    assert.isTrue(Is.boolean(false));
    assert.isFalse(Is.boolean(undefined));
    assert.isFalse(Is.boolean(null));
    assert.isFalse(Is.boolean([]));
    assert.isFalse(Is.boolean(''));
    assert.isFalse(Is.boolean('foo'));
    assert.isFalse(Is.boolean(/test/));
    assert.isFalse(Is.boolean({}));
    assert.isFalse(Is.boolean(1));
    assert.isFalse(Is.boolean(TestClass));
    assert.isFalse(Is.boolean(new TestClass()));
    assert.isFalse(Is.boolean(new Date()));
    assert.isFalse(Is.boolean(new Date('2020-01-01')));
    assert.isFalse(Is.boolean(Symbol('test')));
    done();
  });

  it('date datatype matching', done => {
    assert.isTrue(Is.date(new Date()));
    assert.isTrue(Is.date(new Date('2020-01-01')));
    assert.isFalse(Is.date(undefined));
    assert.isFalse(Is.date(null));
    assert.isFalse(Is.date([]));
    assert.isFalse(Is.date(''));
    assert.isFalse(Is.date('foo'));
    assert.isFalse(Is.date(/test/));
    assert.isFalse(Is.date({}));
    assert.isFalse(Is.date(1));
    assert.isFalse(Is.date(true));
    assert.isFalse(Is.date(false));
    assert.isFalse(Is.date(TestClass));
    assert.isFalse(Is.date(new TestClass()));
    assert.isFalse(Is.date(Symbol('test')));
    done();
  });

  it('function datatype matching', done => {
    assert.isTrue(Is.function(() => {}));
    assert.isTrue(Is.function(testFunction));
    assert.isTrue(Is.function(TestClass));
    assert.isFalse(Is.function(undefined));
    assert.isFalse(Is.function(null));
    assert.isFalse(Is.function([]));
    assert.isFalse(Is.function(''));
    assert.isFalse(Is.function('foo'));
    assert.isFalse(Is.function(/test/));
    assert.isFalse(Is.function({}));
    assert.isFalse(Is.function(1));
    assert.isFalse(Is.function(true));
    assert.isFalse(Is.function(false));
    assert.isFalse(Is.function(new TestClass()));
    assert.isFalse(Is.function(new Date()));
    assert.isFalse(Is.function(new Date('2020-01-01')));
    assert.isFalse(Is.function(Symbol('test')));
    done();
  });

  it('number datatype matching', done => {
    assert.isTrue(Is.number(0));
    assert.isTrue(Is.number(100));
    assert.isTrue(Is.number(-100));
    assert.isFalse(Is.number(undefined));
    assert.isFalse(Is.number(null));
    assert.isFalse(Is.number([]));
    assert.isFalse(Is.number(''));
    assert.isFalse(Is.number('foo'));
    assert.isFalse(Is.number(/test/));
    assert.isFalse(Is.number({}));
    assert.isFalse(Is.number(true));
    assert.isFalse(Is.number(false));
    assert.isFalse(Is.number(TestClass));
    assert.isFalse(Is.number(new TestClass()));
    assert.isFalse(Is.number(new Date()));
    assert.isFalse(Is.number(new Date('2020-01-01')));
    assert.isFalse(Is.number(Symbol('test')));
    done();
  });

  it('null datatype matching', done => {
    assert.isTrue(Is.null(null));
    assert.isFalse(Is.null(undefined));
    assert.isFalse(Is.null([]));
    assert.isFalse(Is.null(''));
    assert.isFalse(Is.null('foo'));
    assert.isFalse(Is.null(/test/));
    assert.isFalse(Is.null({}));
    assert.isFalse(Is.null(1));
    assert.isFalse(Is.null(true));
    assert.isFalse(Is.null(false));
    assert.isFalse(Is.null(TestClass));
    assert.isFalse(Is.null(new TestClass()));
    assert.isFalse(Is.null(new Date()));
    assert.isFalse(Is.null(new Date('2020-01-01')));
    assert.isFalse(Is.null(Symbol('test')));
    done();
  });

  it('object datatype matching', done => {
    assert.isTrue(Is.object({}));
    assert.isFalse(Is.object(undefined));
    assert.isFalse(Is.object(null));
    assert.isFalse(Is.object([]));
    assert.isFalse(Is.object(''));
    assert.isFalse(Is.object('foo'));
    assert.isFalse(Is.object(/test/));
    assert.isFalse(Is.object(1));
    assert.isFalse(Is.object(true));
    assert.isFalse(Is.object(false));
    assert.isFalse(Is.object(TestClass));
    assert.isFalse(Is.object(new TestClass()));
    assert.isFalse(Is.object(new Date()));
    assert.isFalse(Is.object(new Date('2020-01-01')));
    assert.isFalse(Is.object(Symbol('test')));
    done();
  });

  it('regexp datatype matching', done => {
    assert.isTrue(Is.regExp(/test/));
    assert.isFalse(Is.regExp(undefined));
    assert.isFalse(Is.regExp(null));
    assert.isFalse(Is.regExp([]));
    assert.isFalse(Is.regExp(''));
    assert.isFalse(Is.regExp('foo'));
    assert.isFalse(Is.regExp({}));
    assert.isFalse(Is.regExp(1));
    assert.isFalse(Is.regExp(true));
    assert.isFalse(Is.regExp(false));
    assert.isFalse(Is.regExp(TestClass));
    assert.isFalse(Is.regExp(new TestClass()));
    assert.isFalse(Is.regExp(new Date()));
    assert.isFalse(Is.regExp(new Date('2020-01-01')));
    assert.isFalse(Is.regExp(Symbol('test')));
    done();
  });

  it('string datatype matching', done => {
    assert.isTrue(Is.string(''));
    assert.isTrue(Is.string('foo'));
    assert.isFalse(Is.string(undefined));
    assert.isFalse(Is.string(null));
    assert.isFalse(Is.string([]));
    assert.isFalse(Is.string(/test/));
    assert.isFalse(Is.string({}));
    assert.isFalse(Is.string(1));
    assert.isFalse(Is.string(true));
    assert.isFalse(Is.string(false));
    assert.isFalse(Is.string(TestClass));
    assert.isFalse(Is.string(new TestClass()));
    assert.isFalse(Is.string(new Date()));
    assert.isFalse(Is.string(new Date('2020-01-01')));
    assert.isFalse(Is.string(Symbol('test')));
    done();
  });

  it('symbol datatype matching', done => {
    assert.isTrue(Is.symbol(Symbol('test')));
    assert.isFalse(Is.symbol(undefined));
    assert.isFalse(Is.symbol(null));
    assert.isFalse(Is.symbol([]));
    assert.isFalse(Is.symbol(''));
    assert.isFalse(Is.symbol('foo'));
    assert.isFalse(Is.symbol(/test/));
    assert.isFalse(Is.symbol({}));
    assert.isFalse(Is.symbol(1));
    assert.isFalse(Is.symbol(true));
    assert.isFalse(Is.symbol(false));
    assert.isFalse(Is.symbol(TestClass));
    assert.isFalse(Is.symbol(new TestClass()));
    assert.isFalse(Is.symbol(new Date()));
    assert.isFalse(Is.symbol(new Date('2020-01-01')));
    done();
  });

  it('undefined datatype matching', done => {
    assert.isTrue(Is.undefined(undefined));
    assert.isFalse(Is.undefined(null));
    assert.isFalse(Is.undefined([]));
    assert.isFalse(Is.undefined(''));
    assert.isFalse(Is.undefined('foo'));
    assert.isFalse(Is.undefined(/test/));
    assert.isFalse(Is.undefined({}));
    assert.isFalse(Is.undefined(1));
    assert.isFalse(Is.undefined(true));
    assert.isFalse(Is.undefined(false));
    assert.isFalse(Is.undefined(TestClass));
    assert.isFalse(Is.undefined(new TestClass()));
    assert.isFalse(Is.undefined(new Date()));
    assert.isFalse(Is.undefined(new Date('2020-01-01')));
    assert.isFalse(Is.undefined(Symbol('test')));
    done();
  });

  // Test battery for new data type checking.
  // assert.isFalse(Is.something(undefined));
  // assert.isFalse(Is.something(null));
  // assert.isFalse(Is.something([]));
  // assert.isFalse(Is.something(''));
  // assert.isFalse(Is.something('foo'));
  // assert.isFalse(Is.something(/test/));
  // assert.isFalse(Is.something({}));
  // assert.isFalse(Is.something(1));
  // assert.isFalse(Is.something(true));
  // assert.isFalse(Is.something(false));
  // assert.isFalse(Is.something(TestClass));
  // assert.isFalse(Is.something(new TestClass()));
  // assert.isFalse(Is.something(new Date()));
  // assert.isFalse(Is.something(new Date('2020-01-01')));
  // assert.isFalse(Is.something(Symbol('test')));

  class TestClass {}
  function testFunction() {}
});
