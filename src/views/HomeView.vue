<template>
  <ProductList :products="products" />
</template>

<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import ProductList from "@/components/ProductList.vue";

const store = useStore();

const products = computed(() => store.state.products);
</script>
