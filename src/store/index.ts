import products from '@/mokup/products'
import { createStore } from 'vuex'
import { Product, Cart } from '../types'

type StateShape = {
  products: Product[],
  cart: Cart[],

}

export default createStore({
  state: (): StateShape => ({
    products: [],
    cart: [],

  }),
  getters: {
    getWishlistProducts(state) {
      return state.products.filter((product) => product.isFav)
    },
    getCartCounter(state): number {
      return state.cart.length
    },
    getCartItems(state): Cart[] {
      return state.cart
    },
    getTotalItems(state): number {
      return state.cart.reduce((acc, curr) => acc + curr.total, 0)
    }
  },
  mutations: {
    updateProducts(state, data: Product[]) {
      state.products = data

    },
    createProduct(state, product: Product) {
      state.products.push(product)
    },
    addToWhishList(state, product: Product) {
      const selectedProductIndex = state.products.findIndex((p) => p.id == product.id)
      state.products[selectedProductIndex].isFav = !state.products[selectedProductIndex].isFav
    },
    addToCart(state, product: Product) {
      const selectedProductIndex = state.cart.findIndex((cart) => cart.product.id == product.id)
      const selectCartItem = state.cart[selectedProductIndex]
      if (selectedProductIndex === -1) {
        state.cart.push({
          id: Math.random(),
          product: product,
          quantity: 1,
          total: product.price
        })
      }
      else {
        selectCartItem.quantity++
        selectCartItem.total = selectCartItem.product.price * selectCartItem.quantity
      }

    },
    removeItemFromCart(state, cartId) {
      state.cart = state.cart.filter((cart) => cart.id !== cartId)
    },
    updateTotal(state, cartItemId: number) {
      const updatedCart = state.cart.find((cart) => cart.id == cartItemId)
      if (!updatedCart) {
        return
      }
      updatedCart.total = updatedCart.product.price * updatedCart.quantity

    }

  },
  actions: {
    async getProductsData({ commit }) {
      try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        console.log(data)
        commit("updateProducts", data)

      } catch (error) {
        console.error(error)
      }

    }
  },
  modules: {
  }
})
