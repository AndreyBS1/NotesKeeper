<template>
  <div id="app">
    <custom-header class="header" />
    <router-view
      class="view-height"
      v-show="!loading"
      @loading="loading = true"
      @loaded="loading = false"
    />
    <div class="loading view-height" v-show="loading">
      <img src="@/assets/loading-rolling.svg" />
    </div>
    <!-- <div>
      <b-card-group>
        <b-card
          title="Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>

        <b-card
          title="Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>

        <b-card
          title="Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Image"
          img-top
        >
          <b-card-text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>
      </b-card-group>
    </div> -->
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

.view-height {
  height: calc(90vh - var(--min-header-height));
}

.header {
  height: 10vh;
  max-width: 100%;
  min-height: var(--min-header-height);
}

.loading {
  /* height: calc(90vh - var(--min-header-height)); */
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
