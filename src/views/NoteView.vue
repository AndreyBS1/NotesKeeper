<template>
  <div class="note-screen">
    <b-form>
      <div class="title-input-area">
        <b-form-group class="title-input">
          <b-form-input
            size="lg"
            v-model="note.note_title"
            placeholder="Note title"
            required
          ></b-form-input>
        </b-form-group>
        <div class="button">
          <b-button pill variant="outline-success" @click="saveNote">
            Save
          </b-button>
        </div>
        <div class="button">
          <router-link to="/">
            <b-button pill variant="outline-danger" @click="deleteNote">
              Delete
            </b-button>
          </router-link>
        </div>
        <div class="button">
          <router-link to="/">
            <b-button pill variant="outline-dark"> Back </b-button>
          </router-link>
        </div>
      </div>
      <b-form-group class="text-input-area">
        <b-form-textarea
          class="text-input"
          rows="13"
          max-rows="100"
          no-resize
          v-model="note.note_text"
          placeholder="Note text"
          required
        ></b-form-textarea>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import Request from "@/api/request";

export default {
  name: "NoteView",

  props: {
    noteId: {
      type: String,
      default() {
        return "";
      },
    },
  },

  emits: {
    loading: null,
    loaded: null,
  },

  data() {
    return {
      note: {},
    };
  },

  methods: {
    async saveNote() {
      if (this.note.note_title && this.note.note_text) {
        if (+this.noteId) {
          this.$emit("loading");
          await Request.put(this.note);
          this.$emit("loaded");
        } else {
          this.$emit("loading");
          await Request.post(this.note);
          this.$emit("loaded");
        }
      } else {
        alert("Please fill in the Title and Text fields!");
      }
    },

    async deleteNote() {
      this.$emit("loading");
      await Request.delete(this.note);
      this.$emit("loaded");
    },

    async getOneNote() {
      if (+this.noteId) {
        this.$emit("loading");
        this.note = await Request.getOne(this.noteId);
        this.$emit("loaded");
      }
    },
  },

  async mounted() {
    await this.getOneNote();
  },
};
</script>

<style scoped>
.note-screen {
  padding: 3% 5%;
}

.title-input-area {
  display: flex;
}

.title-input {
  margin-right: 1%;
  width: 100%;
}

.button {
  margin: 0 1%;
}

.text-input-area {
  margin: 3% 0;
}

.text-input {
  width: 100%;
}
</style>
