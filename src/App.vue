<template>
  <div class="flex items-center justify-center">
    <button
      class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-300 rounded"
      v-on:click="getWaifu"
    >
      <img :src="apiResponseData.images[0].url" alt="waifu" class="w-96"/>click to update
    </button>
  </div>
</template>

<script>
export default {
  emits: ["onClick"],
  data: function () {
    return {
      apiResponseData: {},
    };
  },

  created: async function () {
    const apiUrl = `https://api.waifu.im/search`;
    const params = {
      included_tags: "maid",
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
  methods: {
    async getWaifu () {
      console.log("hey!");
      const apiUrl = `https://api.waifu.im/search`;
      const params = {
      included_tags: "maid",
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
    }
  },
  
};
</script>

<style lang="scss" scoped></style>
