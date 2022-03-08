<template>
    <div>
        <a @click="$emit('click-on-note-card', note)">
            <b-card :title="note.note_title">
                <b-card-text>
                    {{ note.note_text }}
                </b-card-text>
            </b-card>
        </a>
    </div>
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