import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'

export default class GearClosetRoute extends Route {
  @service firebaseApp

  async model() {
    const {
      currentUser: { uid },
    } = await this.firebaseApp.auth()

    if (!uid) {
      return this.transitionTo('/')
    }

    return await this.store.query('gearItems', {
      where: ['userId', '==', uid],
    })
  }
}
