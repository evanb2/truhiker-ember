import Route from '@ember/routing/route'

export default class GearClosetRoute extends Route {
  model() {
    return [
      {
        id: 0,
        name: 'Borah Tarp',
        weight: '',
      },
    ]
  }
}
