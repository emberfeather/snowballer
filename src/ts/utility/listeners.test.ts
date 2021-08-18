import {Listeners} from './listeners';
import {assert} from 'chai';

describe('Is', () => {
  it('able to trigger a listener.', done => {
    const listeners = new Listeners();
    listeners.add('test', (value: string) => {
      assert.equal(value, 'foo');
      done();
    });
    listeners.trigger('test', 'foo');
  });
});
