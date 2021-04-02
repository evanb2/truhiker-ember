import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | gear-lists', function (hooks) {
  setupTest(hooks)

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:gear-lists')
    assert.ok(route)
  })
})
