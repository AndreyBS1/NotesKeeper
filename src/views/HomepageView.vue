<template>
  <div class="main-screen">
    <div class="instruments">
      <router-link to="/notes/new">
        <b-button pill variant="outline-dark"> New Note </b-button>
      </router-link>
    </div>

    <note-card
      class="note-card"
      v-show="hasNotes"
      v-for="note in notes"
      :key="note.id"
      :note="note"
    />

    <div class="no-notes" v-show="!hasNotes">
      <h3>There's no Notes to show!</h3>
      <h6>Click on "New Note" button to create one</h6>
    </div>
  </div>
</template>

<script>
import NoteCard from "@/components/NoteCard.vue";
import Request from "@/api/request";

export default {
  name: "HomepageView",

  components: {
    NoteCard,
  },

  emits: {
    loading: null,
    loaded: null,
  },

  data() {
    return {
      notes: [],
    };
  },

  computed: {
    hasNotes() {
      return this.notes.length > 0;
    },
  },

  methods: {
    async getAllNotes() {
      this.$emit("loading");
      this.notes = await Request.getAll();
      this.$emit("loaded");
    },
  },

  async mounted() {
    await this.getAllNotes();
  },
};
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
