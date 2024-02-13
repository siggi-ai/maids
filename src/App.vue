<template>
  <div class="flex items-center justify-center bg-rose-300 h-screen">
    <!-- this is the image, which is also a button to click on -->
    <button
      class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 border border-red-300 rounded-md font-bangers text-2xl"
      v-on:click="getWaifu"
    >
      click image to update (random)
      <img :src="apiResponseData.images[0].url" alt="waifu" class="h-[80vh]" />
    </button>

    <!-- load image by selected option -->

    <div class="flex flex-col p-8">
      <label for="tag" class="text-center font-bangers"
        >Choose an Option:</label
      >
      <select
        name="waifu"
        v-on:change="selectWaifu($event)"
        v-model="tag"
        class="w-36 py-3 px-4 pe-9 block border-gray-200 rounded-lg text-sm focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-pink-700 dark:text-pink-400 dark:focus:ring-pink-300"
      >
        <option :value="tag" v-for="tag in tags">{{ tag }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      apiResponseData: {},
      tags: [
        "maid",
        "waifu",
        "marin-kitagawa",
        "mori-calliope",
        "raiden-shogun",
        "oppai",
        "selfies",
        "uniform",
      ],
    };
  },

  /* a function to do the first fetch */

  created: async function () {
    const apiUrl = `https://api.waifu.im/search`;
    const params = {
      included_tags: "uniform",
      height: ">=2000",
    };
    const queryParams = new URLSearchParams(params);
    const requestUrl = `${apiUrl}?${queryParams}`;

    try {
      const response = await fetch(requestUrl);
      const result = await response.json();
      this.apiResponseData = result;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },

  /* function to refresh the fetch and get a random new image */

  methods: {
    async getWaifu() {
      console.log("hey!");
      const apiUrl = `https://api.waifu.im/search`;
      const params = {
        included_tags: "uniform",
        height: ">=2000",
      };
      console.log(apiUrl);

      const queryParams = new URLSearchParams(params);
      const requestUrl = `${apiUrl}?${queryParams}`;

      try {
        const response = await fetch(requestUrl);
        const result = await response.json();
        this.apiResponseData = result;
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },

    async selectWaifu(event) {
      console.log("ho!");
      console.log(event.target.value);
      const apiUrl = `https://api.waifu.im/search`;
      const params = {
        included_tags: event.target.value,
        height: ">=2000",
      };
      const queryParams = new URLSearchParams(params);
      const requestUrl = `${apiUrl}?${queryParams}`;
      try {
        const response = await fetch(requestUrl);
        const result = await response.json();
        this.apiResponseData = result;
        console.log(apiResponseData);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
