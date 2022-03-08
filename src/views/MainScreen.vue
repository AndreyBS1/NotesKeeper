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
    <note-card
      class="note-card"
      v-for="note in notes"
      :note="note"
      :key="note.id"
    />
  </div>
</template>

<script>
import NoteCard from '../components/NoteCard.vue'
import Request from '../../api/request'

export default {
  name: 'MainScreen',
  components: {
    NoteCard,
  },
  data() {
    return {
      visible: true,
      notes: [],
    }
  },
  methods: {
    clickOnCreateButton() {
      this.visible = false;
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
