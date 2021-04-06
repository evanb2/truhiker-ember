import Controller from '@ember/controller'
import { inject as service } from '@ember/service'

export default class GearListsIndexController extends Controller {
  @service store

  createGearList = async () => {
    const gearList = this.store.createRecord('gearList', {
      name: 'New List',
      groups: [],
    })

    await gearList.save()

    this.transitionToRoute('gear-lists.show', gearList.id)
  }
}
