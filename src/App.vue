<template>
  <div class="flex flex-col min-[500px]:flex-row items-center justify-center bg-rose-300 h-screen">

    <!-- load image by selected option -->
    <div class="flex flex-col p-8 pt-36">
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


      <!-- this is the image, which is also a button to click on -->
    <div>
      <div v-if="loading" class="flex items-center justify-center">
          <div class="back"></div>
          <div class="heart"></div>
      </div>

      <div v-else >
        <button 
          class="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 border border-red-300 rounded-md font-bangers text-2xl "
          v-on:click="
            getWaifu($event);
            random_waifu_tag();
          "
          
               >
          click to update (random)
          <img v-if="apiResponseData.images" :src="apiResponseData.images[0].url" alt="waifu" class="h-[80vh shrink-0] md:h-[80vh] " />
        </button>
      </div>
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
      random_tag: [],
      loading: false,
    };
  },

  /* a function to do the first fetch */

  created: async function () {
    this.loading = true;
    const apiUrl = `https://api.waifu.im/search`;
    const params = {
      included_tags: "maid",
      height: "<=2000",
    };
    const queryParams = new URLSearchParams(params);
    const requestUrl = `${apiUrl}?${queryParams}`;

    try {
      const response = await fetch(requestUrl);
      const result = await response.json();
      this.apiResponseData = result;
      this.loading = false;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },

  /* function to refresh the fetch and get a random new image */

  methods: {
    random_waifu_tag() {
      var chosen_tag = this.tags[Math.floor(Math.random() * this.tags.length)];
      this.random_tag = chosen_tag;
    },

    async getWaifu() {
      this.loading = true;
      console.log("hey!");
      console.log(this.random_tag);
      const apiUrl = `https://api.waifu.im/search`;
      const params = {
        included_tags: this.random_tag,
        height: "<=2000",
      };
      console.log(apiUrl);

      const queryParams = new URLSearchParams(params);
      const requestUrl = `${apiUrl}?${queryParams}`;

      try {
        const response = await fetch(requestUrl);
        const result = await response.json();
        this.loading = false;
        this.apiResponseData = result;
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },

    /* function to get a new image from selected category new image */

    async selectWaifu(event) {
      this.loading = true;
      console.log("ho!");
      console.log(event.target.value);
      const apiUrl = `https://api.waifu.im/search`;
      const params = {
        included_tags: event.target.value,
        height: "<=2000",
      };
      const queryParams = new URLSearchParams(params);
      const requestUrl = `${apiUrl}?${queryParams}`;
      try {
        const response = await fetch(requestUrl);
        const result = await response.json();
        this.apiResponseData = result;
        this.loading = false;
        console.log(apiResponseData);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.center{
  display: flex;
} 
.back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: pink;
    animation-name: backdiv;
    animation-duration: 1s; 
    animation-iteration-count: infinite;
  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: deeppink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  .heart:after {
    background-color: deeppink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart:before {
    background-color: deeppink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

  @keyframes backdiv {
    50% {
      background: #ffe6f2;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.6) rotate(-45deg);
    }
  }
</style>