<template>
  <div class="note-screen">
    <b-form>
      <div class="title-input-area">
        <b-form-group class="title-input">
          <b-form-input
            size="lg"
            v-model="noteObject.note_title"
            placeholder="Note title"
            required
          ></b-form-input>
        </b-form-group>
        <div class="button">
          <b-button pill variant="outline-success" @click="clickOnSaveButton">
            Save
          </b-button>
        </div>
        <div class="button">
          <b-button
            pill
            variant="outline-danger"
            @click="clickOnDeleteButton"
            :disabled="isDisabled"
          >
            Delete
          </b-button>
        </div>
        <div class="button">
          <b-button pill variant="outline-dark" @click="clickOnBackButton">
            Back
          </b-button>
        </div>
      </div>
      <b-form-group class="text-input-area">
        <b-form-textarea
          class="text-input"
          rows="13"
          max-rows="100"
          no-resize
          v-model="noteObject.note_text"
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

  emits: ["back-to-main-screen"],

  data() {
    return {
      note: {},
    };
  },

  computed: {
    // noteObject() {
    //   return this.note;
    // },

    isDisabled: {
      get: function () {
        return !this.note.note_title && !this.note.note_text;
      },
      set: function (value) {
        return value;
      },
    },
  },

  methods: {
    // clickOnBackButton() {
    //   this.$emit("back-to-main-screen");
    // },

    async clickOnSaveButton() {
      if (this.note.note_title && this.note.note_text) {
        if (+this.noteId) {
          await Request.put(this.noteObject);
        } else {
          await Request.post(this.noteObject);
        }
      } else {
        alert("Please fill in the Title and Text fields!");
      }
    },

    async clickOnDeleteButton() {
      this.isDisabled = true;
      await Request.delete(this.noteObject);
      this.$emit("back-to-main-screen");
    },

    async getOneNote(noteId) {
      if (+this.noteId) {
        this.note = await Request.getOne(noteId);
      }
      // this.loading = false;
      // console.log("\n\nDisplayed data:\n\n");
      // console.log(this.notes);
    },
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
