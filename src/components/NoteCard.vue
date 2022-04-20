<template>
  <b-card border-variant="dark" no-body>
    <router-link :to="'/notes/' + note.id" class="text-link">
      <b-card-body class="note-body">
        <b-card-title class="note-title">
          {{ note.note_title }}
        </b-card-title>
        <b-card-text class="note-text">
          {{ note.note_text }}
        </b-card-text>
      </b-card-body>
    </router-link>
  </b-card>
</template>

<script>
export default {
  name: "NoteCard",

  props: {
    note: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.text-link {
  width: 100%;
  height: 100%;
}

.note-body {
  max-height: 100%;
}

.note-title {
  max-height: 10%;
}

.note-text {
  max-height: 90%;
}
</style>
