
import store from '@/store'
import { Product } from '@/types'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
describe('getWishlistProducts', () => {
  it('renders only wishlist Products', () => {
    store.getters.getWishlistProducts.map((product: Product) => expect(product.isFav).toBeTruthy())
  })
})

