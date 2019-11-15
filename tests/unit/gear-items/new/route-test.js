import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | gear-items/new', hooks => {
  setupTest(hooks)

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:gear-items/new')
    assert.ok(route)
  })
})
