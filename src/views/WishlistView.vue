<template>
  <ProductList :products="wishlistProducts" v-if="wishlistProducts.length" />
  <h1 v-else class="text-center mt-20 text-5xl">Wishlist is Empty</h1>
</template>

<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import ProductList from "@/components/ProductList.vue";

const store = useStore();
const wishlistProducts = computed(() => store.getters.getWishlistProducts);
console.log(wishlistProducts.value);
</script>
