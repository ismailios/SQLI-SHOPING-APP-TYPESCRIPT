import products from '@/mokup/products'
import { createStore } from 'vuex'
import { Product, Cart } from '../types'

type StateShape = {
  products: Product[],
  cart: Cart[],
}

export default createStore({
  state: (): StateShape => ({
    products: products,
    cart: []
  }),
  getters: {
    getWishlistProducts(state) {
      return state.products.filter((product) => product.isFav)
    },
    getCartCounter(state) {
      return state.cart.length
    },
    getCartItems(state) {
      return state.cart
    },
    getTotalItems(state) {
      return state.cart.reduce((acc, curr) => acc += curr.total, 0)
    }
  },
  mutations: {
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
    }
  },
  actions: {
  },
  modules: {
  }
})
