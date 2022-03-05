<template>
  <div id="app">
    <custom-header/>
    <main-screen/>
    <note-screen/>
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
