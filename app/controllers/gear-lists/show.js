import Controller from '@ember/controller'
import { tracked } from '@glimmer/tracking'

export default class GearListsShowController extends Controller {
  @tracked weightUnits = 'lb'

  save = () => this.model.gearList.save()

  addGroup = () => {
    this.model.gearList.groups.push({
      name: 'New Group',
      description: '',
      gearListItems: [
        {
          gearItem: null,
          quantity: 1,
        },
      ],
    })

    this.model.gearList.save()
  }

  removeGroup = async (groupIndex) => {
    this.model.gearList.groups = [
      ...this.model.gearList.groups.filter((_, i) => i !== groupIndex),
    ]
    this.model.gearList.save()
  }

  addGearItem = (groupIndex) => {
    this.model.gearList.groups[groupIndex].gearListItems.push({
      gearItem: null,
      quantity: 1,
    })
  }
}
