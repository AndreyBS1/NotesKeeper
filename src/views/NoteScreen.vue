<template>
    <div>
        <div>
            {{ note.note_title }}
            <b-button @click="clickOnBackButton">Back</b-button>
        </div>
        <div>
            {{ note.note_text }}
        </div>
    </div>    
</template>

<script>
export default {
    name: "NoteScreen",

    props: {
        note: {
            type: Object,
            default() {
                return {}
            }
        }
    },

    emits: ['back-to-main-screen'],

    methods: {
        clickOnBackButton() {
            this.$emit('back-to-main-screen');
        }
    }
}
</script>

<style scoped>

</style>