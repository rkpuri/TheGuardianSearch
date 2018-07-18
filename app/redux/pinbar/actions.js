export const THE_GUARDIAN_ADD_TO_PIN_BAR = 'THE_GUARDIAN_ADD_TO_PIN_BAR'
export const THE_GUARDIAN_REMOVE_FROM_PIN_BAR = 'THE_GUARDIAN_REMOVE_FROM_PIN_BAR'

export function addToPinBar (item) {
  return {
    type: THE_GUARDIAN_ADD_TO_PIN_BAR,
    item
  }
}

export function removeFromPinBar (id) {
  return {
    type: THE_GUARDIAN_REMOVE_FROM_PIN_BAR,
    id
  }
}
