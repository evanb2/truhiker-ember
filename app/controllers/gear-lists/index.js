import Controller from '@ember/controller'
import { inject as service } from '@ember/service'

export default class GearListsIndexController extends Controller {
  @service store

  createGearList = async () => {
    const gearList = this.store.createRecord('gearList', {
      name: 'New List',
      groups: [
        {
          name: 'New Group',
          description: '',
          gearListItems: [
            {
              gearListItem: {
                name: '',
                description: '',
                weight: '',
              },
              quantity: 1,
            },
          ],
        },
      ],
    })

    await gearList.save()

    this.transitionToRoute('gear-lists.show', gearList.id)
  }
}
