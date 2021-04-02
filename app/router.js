import EmberRouter from '@ember/routing/router'
import config from 'tru-hiker/config/environment'

export default class Router extends EmberRouter {
  location = config.locationType
  rootURL = config.rootURL
}

Router.map(function () {
  this.route('gear-items', function () {
    this.route('show', { path: '/:gear_item_id' })
  })
  this.route('gear-lists', function () {
    this.route('show', { path: '/:gear_list_id' })
  })
})
