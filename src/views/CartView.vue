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
                    class="text-center text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Product image
                  </th>
                  <th
                    scope="col"
                    class="text-center text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Product name
                  </th>
                  <th
                    scope="col"
                    class="text-center text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Price
                  </th>

                  <th
                    scope="col"
                    class="text-center text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    class="text-center text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    class="text-center text-sm font-medium text-gray-900 px-6 py-4"
                  >
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cartItem in cartItems" :key="cartItem.id" class="">
                  <td
                    class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    <img :src="cartItem.product.image" alt="" class="w-20" />
                  </td>
                  <td
                    class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                  >
                    {{ cartItem.product.title }}
                  </td>
                  <td
                    class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    $ {{ formattedPrice(cartItem.product.price) }}
                  </td>
                  <td
                    class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    <input
                      id="quantity"
                      name="quantity"
                      min="1"
                      type="number"
                      v-model="cartItem.quantity"
                      @change="handleQuantity(cartItem.id)"
                      class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </td>
                  <td
                    class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    $ {{ formattedPrice(cartItem.total) }}
                  </td>
                  <td
                    class="text-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
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
                  <td colspan="5" class="font-black">
                    Total : ${{ formattedPrice(totalItems) }}
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
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();
const cartItems = computed(() => store.getters.getCartItems);
const totalItems = computed(() => store.getters.getTotalItems);

function handleQuantity(cartItemId: number) {
  store.commit("updateTotal", cartItemId);
}

//TODO :  EXTRA
function formattedPrice(price: number) {
  return price.toFixed(2);
}

function removeItemFromCart(cartId: number) {
  store.commit("removeItemFromCart", cartId);
}
</script>

<style scoped></style>
