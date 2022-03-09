<template>
  <div id="app">
    <custom-header/>
    <main-screen
      v-show="mainScreenVisible"
      @create-note="eventToCreateNote"
      @view-note="eventToViewNote"
      :notes="notes"
    />
    <note-screen
      v-show="noteScreenVisible"
      @back-to-main-screen="eventToReturnToMainScreen"
      :note="note"
    />
  </div>
</template>

<script>
import CustomHeader from './components/CustomHeader.vue'
import MainScreen from './views/MainScreen.vue'
import NoteScreen from './views/NoteScreen.vue'
import Request from '../api/request'

export default {
  name: 'App',
  
  components: {
    CustomHeader,
    MainScreen,
    NoteScreen,
  },

  data() {
    return {
      note: {},
      notes: [],
      mainScreenVisible: true,
      noteScreenVisible: false,
    }
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
      console.log("\n\nDisplayed data:\n\n");
      console.log(this.notes);
    }
  },

  async mounted() {
    await this.getNotes();
  },
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  background-color: whitesmoke;
}
</style>
