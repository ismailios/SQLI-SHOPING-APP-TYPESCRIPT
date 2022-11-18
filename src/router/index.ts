import store from '@/store'
import { Product } from '@/types'
import NProgress from 'nprogress'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const HomeView = () => import('@/views/HomeView.vue')
const ProductShow = () => import('@/views/ProductShow.vue')
const ProductCreate = () => import('@/views/ProductCreate.vue')
const WishlistView = () => import('@/views/WishlistView.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue')
const CartView = () => import('@/views/CartView.vue')


const routes: Array<RouteRecordRaw> = [
  {
    name: "Home",
    path: "/",
    component: HomeView
  },
  {
    name: "ProductShow",
    path: "/productShow/:id",
    component: ProductShow,
    props: true,
    async beforeEnter(to, from, next) {

      await store.dispatch("getProductsData")
      const threadExists = store.state.products.find(
        (product: Product) => product.id.toString() == to.params.id
      )
      if (threadExists) {
        return next()
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          query: to.query,
          hash: to.hash
        })
      }

    }

  },
  {
    name: "ProductCreate",
    path: "/productCreate/",
    component: ProductCreate,
  },
  {
    name: "Wishlist",
    path: "/wishlist/",
    component: WishlistView,
  },
  {
    name: "Cart",
    path: "/Cart/",
    component: CartView,
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    component: NotFoundView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
