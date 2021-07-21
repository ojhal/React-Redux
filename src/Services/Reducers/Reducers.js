import { Add_to_cart } from '../Constant'
const initialState =
{
  cartItem: []
}

export default function cartItem(state = initialState, action) {
  switch (action.type) {
    case Add_TO_CART:
      return {
        ...State,
        cardData: action.data
      }
      break;
    default:
      return state

  }
}