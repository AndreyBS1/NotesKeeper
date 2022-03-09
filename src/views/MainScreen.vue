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
      v-for="note in notesArray"
      :key="note.id"
      :note="note"
      @click-on-note-card="clickOnNoteCard"
    />
  </div>
</template>

<script>
import NoteCard from '../components/NoteCard.vue'
// import Request from '../../api/request'

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

  // data() {
  //   return {
  //     notes: [],
  //   }
  // },

  computed: {
    notesArray() {
      return this.notes;
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
    
    // async getNotes() {
    //   this.notes = await Request.get();
    //   console.log("\n\nDisplayed data:\n\n");
    //   console.log(this.notes);
    // }
  },

  // async mounted() {
  //   await this.getNotes();
  // },
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
  margin: 3% 0;
  cursor: pointer;
}
</style>
