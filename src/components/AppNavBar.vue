<template>
  <Disclosure as="nav" class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <router-link to="/">
                <span class="text-white text-xl pr-16">Home</span>
              </router-link>
              <router-link :to="{ name: 'ProductCreate' }">
                <span class="text-white text-xl pr-16">Add Product</span>
              </router-link>
              <router-link :to="{ name: 'Wishlist' }">
                <span class="text-white text-xl pr-16">Wishlist</span>
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <router-link :to="{ name: 'Cart' }">
            <button
              type="button"
              class="rounded-full relative bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="sr-only">View Cart</span>
              <span
                v-if="cartCounter > 0"
                class="absolute top-0 left-9 bg-yellow-500 text-white cartCounter"
                >{{ cartCounter }}</span
              >
              <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
import { Disclosure } from "@headlessui/vue";
import { ShoppingCartIcon } from "@heroicons/vue/24/outline";
import { computed } from "@vue/runtime-core";

const store = useStore();

const cartCounter = computed(() => store.getters.getCartCounter);
</script>
<style scoped>
.cartCounter {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  text-align: center;
  line-height: 30px;
}
</style>
