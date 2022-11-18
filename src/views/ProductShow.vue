<template>
  <div class="bg-white">
    <div class="pt-6">
      <div
        class="mx-auto max-w-xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h2>Product information</h2>
          <h1
            class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          >
            {{ product.name }}
          </h1>
          <p class="text-3xl tracking-tight text-gray-900 mt-2">
            ${{ product.price }}
          </p>
        </div>

        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <div
            class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block m-4"
          >
            <img
              :src="product.image"
              :alt="product.title"
              class="object-cover object-center h-64"
            />
          </div>
        </div>

        <div
          class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8"
        >
          <div>
            <h3 class="sr-only">Description</h3>
            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ product.description }}</p>
            </div>
            <div class="space-y-6">
              <p class="text-xl font-bold text-yellow-400">
                Rating : {{ product.rating.rate }} / {{ product.rating.count }}
              </p>
            </div>
            <button
              @click="addToCart(product)"
              type="submit"
              class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from "@/types";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
const store = useStore();
const props = defineProps<{ id: string }>();

const product = computed(() =>
  store.state.products.find(
    (product: Product) => product.id.toString() == props.id
  )
);

function addToCart(product: Product) {
  store.commit("addToCart", product);
}
</script>

<style scoped></style>
