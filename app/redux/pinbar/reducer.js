import * as actionType from './actions'

const initialState = {
	pinBarList: []
}

export default function PinBarReducer(state = initialState, action) {
   switch (action.type) {
    case actionType.THE_GUARDIAN_ADD_TO_PIN_BAR : {
      
      let isFound = state.pinBarList.some(function (item) {
        return item.id === action.item.id;
      })
      
      if (!isFound) {
        return Object.assign({}, state, {
          pinBarList: state.pinBarList.concat(action.item)
        })
      } else {
        return state
      }
    }
    case actionType.THE_GUARDIAN_REMOVE_FROM_PIN_BAR : {
      let updatedList = state.pinBarList.filter((item) => (item.id != action.id))
      return Object.assign({}, state, { pinBarList: updatedList })
    }
    default:
      return state
  }
}