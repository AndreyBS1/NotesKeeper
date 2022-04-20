<template>
  <div class="home-page">
    <div class="instruments">
      <router-link to="/notes/new">
        <b-button pill variant="outline-dark"> New Note </b-button>
      </router-link>
    </div>

    <div class="note-group">
      <note-card
        class="note-card"
        v-show="hasNotes"
        v-for="note in notes"
        :key="note.id"
        :note="note"
      />
      <!-- <note-card
        v-show="hasNotes"
        v-for="note in notes"
        :key="note.id"
        :note="note"
      /> -->
    </div>

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
.home-page {
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  /* align-items: center; */
  /* flex-wrap: wrap; */
  padding: 3% 5%;
}

.instruments {
  /* width: 100%; */
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.note-group {
  height: 90%;
  display: flex;
  justify-content: center;
}

.note-card {
  width: 30%;
  height: 40%;
  margin: 4%;
  cursor: pointer;
  /* overflow: hidden; */
}

.no-notes {
  padding: 3% 0;
  text-align: center;
}
</style>
