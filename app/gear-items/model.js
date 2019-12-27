import Model, { attr } from '@ember-data/model'

export default class GearItem extends Model {
  @attr('string') name
  @attr('string') description
  @attr('string') linkURL
  @attr('string') photoURL
  @attr('string') price
  @attr('string') units
  @attr('number') updated
  @attr('string') userId
  @attr('string') weight
}
