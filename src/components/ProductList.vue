<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        Customers also purchased
      </h2>

      <div
        class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative"
        >
          <div
            class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
          >
            <img
              :src="product.imageSrc"
              :alt="product.name"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                {{ product.name }}
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">
              $ {{ product.price }}
            </p>
          </div>
          <button title="add to whishlist" @click="addToWhishList(product)">
            <HeartIcon
              :class="['h-6 w-6 ', { isfav: product.isFav }]"
              aria-hidden="true"
            />
          </button>
          <div class="flex justify-between align-middle mt-2">
            <router-link
              :to="{ name: 'ProductShow', params: { id: product.id } }"
            >
              <button
                class="bg-blue-500 rounded-md text-base text-white p-3 border-raduis"
              >
                View Item
              </button>
            </router-link>

            <button
              @click="addToCart(product)"
              class="bg-gray-900 rounded-md text-base text-white p-3 border-raduis"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from "@/types";
import { HeartIcon } from "@heroicons/vue/24/outline";
import { useStore } from "vuex";

defineProps<{ products: Product[] }>();

const store = useStore();

function addToWhishList(product: Product) {
  store.commit("addToWhishList", product);
}

function addToCart(product: Product) {
  store.commit("addToCart", product);
}
</script>

<style scoped>
svg.isfav {
  fill: red;
  stroke: red;
}
</style>
