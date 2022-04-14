<template>
  <div id="app">
    <custom-header />
    <router-view
      v-show="!loading"
      @loading="loading = true"
      @loaded="loading = false"
    />
    <div class="loading" v-show="loading">
      <img v-show="loading" src="@/assets/loading-infinity.svg" />
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
  min-width: 100vw;
  min-height: 100vh;
}

.loading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
