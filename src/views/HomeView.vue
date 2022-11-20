<template>
  <div>
    <ProductList :products="products" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { useStore } from "@/store";
import ProductList from "@/components/ProductList.vue";

const store = useStore();

store.dispatch("getProductsData");

const products = computed(() => store.state.products);
</script>
