<template>
    <div>
        <b-card
            :title='note.title'
        >
            <b-card-text>
                {{ note.text }}
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