<template>
  <div class="flex items-center justify-center">
    <img :src=apiResponseData.images[0].url alt="waifu" class="w-96">
  </div>
</template>

<script>
export default {
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
};
</script>

<style lang="scss" scoped></style>
