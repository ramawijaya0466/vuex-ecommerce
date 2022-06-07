import { createStore } from 'vuex'

import { cart } from "./modules/cart.js";
import { product } from "./modules/product.js";

export default createStore({
  modules: {
    cart,
    product
  }
})
