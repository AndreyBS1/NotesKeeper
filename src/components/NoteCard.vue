<template>
  <router-link :to="'/notes/' + note.id" class="text-link">
    <b-card border-variant="dark" no-body>
      <b-card-body>
        <b-card-title>
          {{ note.note_title }}
        </b-card-title>
        <b-card-text>
          {{ note.note_text }}
        </b-card-text>
      </b-card-body>
    </b-card>
  </router-link>
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

<style scoped></style>
