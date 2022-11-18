<template>
  <div>
    <div
      class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"
    >
      <img
        :src="product.image"
        :alt="product.title"
        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          {{ product.title }}
        </h3>
        <p class="mt-1 text-sm text-gray-500">{{ product.category }}</p>
      </div>
      <p class="text-sm font-medium text-gray-900 flex-shrink-0">
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
      <router-link :to="{ name: 'ProductShow', params: { id: product.id } }">
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
</template>

<script setup lang="ts">
import { Product } from "@/types";
import { HeartIcon } from "@heroicons/vue/24/outline";
defineProps<{ product: Product }>();
const emit = defineEmits<{
  (e: "add-to-cart", product: Product): void;
  (e: "add-to-whishlist", product: Product): void;
}>();

function addToCart(product: Product) {
  emit("add-to-cart", product);
}
function addToWhishList(product: Product) {
  emit("add-to-whishlist", product);
}
</script>

<style scoped>
svg.isfav {
  fill: red;
  stroke: red;
}
</style>
