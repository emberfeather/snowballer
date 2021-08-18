import {ClassManager} from './classes';
import {assert} from 'chai';

describe('Class manager', () => {
  it('default class is returned used when not known', done => {
    const classManager = new ClassManager(TestClassDefault);

    assert.instanceOf(classManager.newFromKey('random'), TestClassDefault);
    done();
  });

  it('null is returned used when no default class', done => {
    const classManager = new ClassManager();

    assert.equal(classManager.newFromKey('random'), null);
    done();
  });

  it('instance is returned used when matching key', done => {
    const classManager = new ClassManager();
    classManager.registerClass('foo', TestClassA);
    assert.instanceOf(classManager.newFromKey('foo'), TestClassA);
    assert.equal(classManager.newFromKey('random'), null);
    done();
  });

  class TestClassA {}
  class TestClassDefault {}
});
