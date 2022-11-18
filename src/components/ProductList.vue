<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl py-16 px-2 sm:py-24 sm:px-3 lg:max-w-7xl lg:px-2"
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
          <ProductItem
            :product="product"
            @add-to-cart="addToCart"
            @add-to-whishlist="addToWhishList"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from "@/types";

import { useStore } from "vuex";
import ProductItem from "./ProductItem.vue";

defineProps<{ products: Product[] }>();

const store = useStore();

function addToWhishList(product: Product) {
  store.commit("addToWhishList", product);
}

function addToCart(product: Product) {
  store.commit("addToCart", product);
}
</script>
