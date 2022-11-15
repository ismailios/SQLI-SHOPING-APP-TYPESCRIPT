import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductShow from '@/views/ProductShow.vue'
import ProductCreate from '@/views/ProductCreate.vue'
import WishlistView from '@/views/WishlistView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import CartView from '@/views/CartView.vue'
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
    props: true
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

export default router
