import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | gear-items', function(hooks) {
  setupTest(hooks)

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:gear-items')
    assert.ok(route)
  })
})
