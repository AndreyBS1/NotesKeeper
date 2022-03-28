<template>
  <div class="main-screen">
    <div class="instruments">
      <b-button
        pill
        variant="outline-dark"
        @click="clickOnCreateButton"
        >
          New Note
        </b-button>
    </div>
    <note-card
      class="note-card"
      v-show="hasNotes"
      v-for="note in notesArray"
      :key="note.id"
      :note="note"
      @click-on-note-card="clickOnNoteCard"
    />
    <div class="no-notes" v-show="!hasNotes">
      <h3>There's no Notes to show!</h3>
      <h6>Click on "New Note" button to create one</h6>
    </div>
  </div>
</template>

<script>
import NoteCard from '../components/NoteCard.vue'

export default {
  name: 'MainScreen',

  components: {
    NoteCard,
  },
    
  props: {
    notes: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  emits: ['create-note', 'view-note'],

  computed: {
    notesArray() {
      return this.notes;
    },

    hasNotes() {
      return (this.notesArray.length > 0) ? true : false;
    }
  },

  methods: {
    clickOnCreateButton() {
      this.visible = false;
      this.$emit('create-note');
    },
    
    clickOnNoteCard(note) {
      this.visible = false;
      this.$emit('view-note', note);
    },
  },
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.note-card {
  width: 30%;
  height: 100%;
  margin: 3% 0;
  cursor: pointer;
}

.no-notes {
  padding: 3% 0;
  text-align: center;
}
</style>
