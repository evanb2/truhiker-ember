import { helper } from '@ember/component/helper'

export const convertUnitsToGrams = {
  kg: (val) => val * 1000,
  lb: (val) => val * 453.59,
  oz: (val) => val * 28.35,
  g: (val) => val,
}

export const convertGramsToUnits = {
  lb: (val) => val / 453.59,
  oz: (val) => val / 28.35,
}

export default helper(function categoryWeight([categoryItems, listUnits]) {
  if (categoryItems?.length === 0) return

  const weightInGrams = categoryItems.reduce((accumulator, currentItem) => {
    const { gearItem, quantity } = currentItem

    if (!gearItem || !quantity) {
      return accumulator
    }

    const { weight, units } = gearItem

    const convertedWeight = convertUnitsToGrams[units](Number(weight))

    return accumulator + Number(convertedWeight) * quantity
  }, 0)

  const totalWeightInUnits = convertGramsToUnits[listUnits](weightInGrams)

  return Math.round(totalWeightInUnits * 100) / 100
})
