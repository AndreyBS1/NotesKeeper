<template>
  <div id="app">
    <custom-header/>
    <main-screen
      v-show="mainScreenVisible"
      @create-note="eventToCreateNote"
      @view-note="eventToViewNote"
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
    
    eventToReturnToMainScreen() {
      this.noteScreenVisible = false;
      this.mainScreenVisible = true;
    },
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  background-color: whitesmoke;
}
</style>
