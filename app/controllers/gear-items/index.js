import Controller from '@ember/controller'
import { inject as service } from '@ember/service'

export default class GearItemsIndexController extends Controller {
  @service store

  createGearItem = async () => {
    const gearItem = this.store.createRecord('gearItem', {
      name: 'New Item',
      description: '',
      units: 'lbs',
      weight: '0.0',
    })

    await gearItem.save()

    this.transitionToRoute('gear-items.show', gearItem.id)
  }
}
