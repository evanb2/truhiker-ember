import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import { hash } from 'rsvp'

export default class GearListsShowRoute extends Route {
  @service store

  model({ gear_list_id }) {
    return hash({
      gearList: this.store.findRecord('gearList', gear_list_id),
      gearItems: this.store.query('gearItem', { subscribe: true }),
    })
  }
}
