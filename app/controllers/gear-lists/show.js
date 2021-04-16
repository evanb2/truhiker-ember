import Controller from '@ember/controller'

export default class GearListsShowController extends Controller {
  save = () => this.model.save()

  addGroup = () => {
    this.model.groups.push({
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
    })

    this.model.save()
  }
}
