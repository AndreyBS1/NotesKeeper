<template>
    <div>
        <b-card
            :title="note.note_title"
        >
            <b-card-text>
                {{ note.note_text }}
            </b-card-text>
        </b-card>
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
    }
}
</script>

<style scoped>

</style>