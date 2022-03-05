<template>
  <div v-show="visible" class="main-screen">
    <div class="instruments">
      <b-button
        pill
        variant="outline-dark"
        @click="clickOnCreateButton()"
        >
          New Note
        </b-button>
    </div>
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
  },
  data() {
    return {
      visible: true,
    }
  },
  methods: {
    clickOnCreateButton() {
      this.visible = false;
    }
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

.instruments {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.note-card {
  width: 30%;
  margin: 3% 0;
}
</style>
