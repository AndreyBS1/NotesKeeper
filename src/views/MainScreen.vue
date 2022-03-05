<template>
  <div class="main-screen">
    <note-card class="note-card"/>
    <note-card class="note-card"/>
    <note-card class="note-card"/>
    <note-card class="note-card"/>
    <note-card class="note-card"/>
    <note-card class="note-card"/>
  </div>
</template>

<script>
import NoteCard from '../components/NoteCard.vue'

export default {
  name: 'MainScreen',
  components: {
    NoteCard,
  }
}
</script>

<style scoped>
.main-screen {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 3% 5%;
}

.note-card {
    width: 30%;
    margin: 3% 0;
}
</style>
