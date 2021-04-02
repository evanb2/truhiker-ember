import Controller from '@ember/controller'

export default class GearItemsShowController extends Controller {
  save = () => this.model.save()
}
