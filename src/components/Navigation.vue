<template>
    <header class="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-0 bg-violet-500">
      <div class="flex items-center justify-between px-4 py-2 sm:p-0">
        <a class="inline-flex md:py-6 md:px-8 hover:text-rose-50 cursor-pointer font-honk text-2xl md:text-5xl"
          ><i class="fa-solid fa-house-chimney text-2xl"></i
        >waifu_generator</a>
        <font-awesome-icon icon="house" />
  
        <div class="sm:hidden">
            <button @click="isOpen = !isOpen" class="hover:text-white px-8">
              <svg class="h-8 w-8 fill-current" viewBox="0 0 24 24">
                <path
                  v-if="isOpen"
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
                <path
                  v-if="!isOpen"
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
        </div>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" class="bg-violet-500 sm:flex">
        <router-link to="/about" class="block py-7 font-bangers text-2xl px-8 hover:text-slate-100 hover:bg-black cursor-pointer">
          about
        </router-link>
      </div>
    </header>
  </template>
  
  
  <script setup>
  
  import { ref } from "vue";
  const isOpen = ref(false);
  
  </script>
  
  
  <style lang="scss" scoped></style>
  

  