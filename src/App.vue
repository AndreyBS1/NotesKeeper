<template>
  <div id="app">
    <custom-header class="header" />
    <router-view
      v-show="!loading"
      @loading="loading = true"
      @loaded="loading = false"
    />
    <div class="loading" v-show="loading">
      <img src="@/assets/loading-rolling.svg" />
    </div>
  </div>
</template>

<script>
import CustomHeader from "@/components/CustomHeader.vue";
export default {
  name: "App",

  components: {
    CustomHeader,
  },

  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  background-color: whitesmoke;
  width: 100vw;
  min-height: 100vh;
  --min-header-height: 70px;
}

.header {
  height: 10vh;
  max-width: 100%;
  min-height: var(--min-header-height);
}

.loading {
  height: calc(90vh - var(--min-header-height));
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading img {
  width: 70px;
}

.text-link {
  text-decoration: none;
  outline: none;
  color: black;
}

.text-link:hover {
  color: black;
}
</style>
