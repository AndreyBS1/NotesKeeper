<template>
    <b-card
        border-variant="dark"
        no-body
    >
        <b-card-body>
            <a @click="$emit('click-on-note-card', note)">
                <b-card-title>
                    {{ note.note_title }}
                </b-card-title>
                <b-card-text>
                    {{ note.note_text }}
                </b-card-text>
            </a>
        </b-card-body>
    </b-card>
</template>

<script>
export default {
    name: "NoteCard",
    
    props: {
        note: {
            type: Object,
            default() {
                return {}
            }
        }
    },

    emits: ['click-on-note-card'],
}
</script>

<style scoped>

</style>