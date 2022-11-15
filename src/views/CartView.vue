<template>
  <div
    v-if="cartItems.length"
    class="overflow-hidden bg-white shadow sm:rounded-lg max-w-5xl m-auto mt-10"
  >
    <p class="max-w-2xl text-sm text-gray-500 m-10">Cart details.</p>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full" aria-label="">
              <thead class="border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Product image
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Product name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Price
                  </th>

                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cartItem in cartItems" :key="cartItem.id" class="">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    <img :src="cartItem.product.imageSrc" alt="" class="w-20" />
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ cartItem.product.name }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    $ {{ cartItem.product.price }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    * {{ cartItem.quantity }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    $ {{ cartItem.total }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    <button @click="removeItemFromCart(cartItem.id)">
                      <TrashIcon
                        class="h-6 w-6 text-black"
                        aria-hidden="true"
                      />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colspan="4" class="font-black">
                    Total : ${{ totalItems }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h2 v-else class="text-center mt-10 text-2xl">Cart Empty :(</h2>
</template>

<script setup lang="ts">
import { TrashIcon } from "@heroicons/vue/24/outline";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();
const cartItems = computed(() => store.getters.getCartItems);
const totalItems = computed(() => store.getters.getTotalItems);

function removeItemFromCart(cartId: number) {
  store.commit("removeItemFromCart", cartId);
}
</script>

<style scoped></style>
