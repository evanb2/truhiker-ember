import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default class GearListsShowRoute extends Route {
  @service store

  model({ gear_list_id }) {
    return this.store.findRecord('gearList', gear_list_id)
  }
}
