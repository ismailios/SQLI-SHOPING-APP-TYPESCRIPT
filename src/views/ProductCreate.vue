<template>
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="w-full max-w-md space-y-8">
      <form class="mt-8 space-y-6" @submit.prevent="createProduct">
        <div>
          <label for="name">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            v-model="FormInputs.title"
            class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Product Title"
          />
        </div>
        <div>
          <label for="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            v-model="FormInputs.price"
            class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Product Price"
          />
        </div>

        <div>
          <label for="price">Color</label>
          <select
            v-model="FormInputs.category"
            class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option value="black">Black</option>
            <option value="black">White</option>
            <option value="black">Red</option>
            <option value="black">Blue</option>
          </select>
        </div>
        <div>
          <label for="price">Description</label>
          <textarea
            v-model="FormInputs.description"
            rows="4"
            class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
          </textarea>
        </div>

        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from "@/types";
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "@/store";

const store = useStore();
const router = useRouter();

const generateId = Math.floor(Math.random() * 100);

const FormInputs: Product = reactive({
  id: generateId,
  title: "",
  price: 0,
  category: "",
  image: `https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg`,
  description: "",
  rating: {
    count: 10,
    rate: 8.6,
  },
  isFav: false,
});

function createProduct() {
  store.commit("createProduct", FormInputs);
  router.push({ name: "Home" });
}
</script>
