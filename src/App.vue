<template>
  <div id="app">
    <custom-header />
    <router-view />
    <!-- <main-screen
      v-show="mainScreenVisible"
      @create-note="eventToCreateNote"
      @view-note="eventToViewNote"
      :notes="notes"
    />
    <note-screen
      v-show="noteScreenVisible"
      @back-to-main-screen="eventToReturnToMainScreen"
      :note="note"
    /> -->
    <div class="loading">
      <img v-show="loading" src="@/assets/loading-infinity.svg" />
    </div>
  </div>
</template>

<script>
import CustomHeader from "@/components/CustomHeader.vue";
// import MainScreen from "@/views/MainScreen.vue";
// import NoteScreen from "@/views/NoteScreen.vue";
import Request from "@/api/request";

export default {
  name: "App",

  components: {
    CustomHeader,
    // MainScreen,
    // NoteScreen,
  },

  data() {
    return {
      note: {},
      notes: [],
      mainScreenVisible: false,
      noteScreenVisible: false,
      loading: true,
    };
  },

  methods: {
    eventToCreateNote() {
      this.note = {};
      this.mainScreenVisible = false;
      this.noteScreenVisible = true;
    },

    eventToViewNote(note) {
      this.note = note;
      this.mainScreenVisible = false;
      this.noteScreenVisible = true;
    },

    async eventToReturnToMainScreen() {
      await this.getNotes();
      this.noteScreenVisible = false;
      this.mainScreenVisible = true;
    },

    async getNotes() {
      this.notes = await Request.get();
      this.loading = false;
      console.log("\n\nDisplayed data:\n\n");
      console.log(this.notes);
    },
  },

  async mounted() {
    await this.getNotes();
    this.mainScreenVisible = true;
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
</style>
