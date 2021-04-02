import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default class GearItemsShowRoute extends Route {
  @service store

  model({ gear_item_id }) {
    return this.store.findRecord('gearItem', gear_item_id)
  }
}
