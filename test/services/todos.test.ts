import assert from 'assert';
import app from '../../src/app';

describe('\'Todos\' service', () => {
  it('registered the service', () => {
    const service = app.service('todos');

    assert.ok(service, 'Registered the service');
  });
});
