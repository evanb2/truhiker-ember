import Model, { attr } from '@ember-data/model'

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  linkURL: attr('string'),
  photoURL: attr('string'),
  price: attr('string'),
  units: attr('string'),
  updated: attr('timestamp'),
  userId: attr('string'),
  weight: attr('string'),
})
