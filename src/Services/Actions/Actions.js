import { Add_to_cart } from '../Constant'
export const addToCart = (data) => {
  return {
    type: Add_to_cart,
    data: data

  }
}


