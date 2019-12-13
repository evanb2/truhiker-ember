import Route from '@ember/routing/route'
import { inject as service } from '@ember/service'
import firebase from 'firebase/app'
import { action } from '@ember/object'

export default class ApplicationRoute extends Route {
  @service session
  @service firebaseApp

  @action
  logout() {
    return this.session.invalidate()
  }

  @action
  async login() {
    const auth = await this.firebaseApp.auth()
    const provider = new firebase.auth.GoogleAuthProvider()

    return auth.signInWithPopup(provider)
  }
}
