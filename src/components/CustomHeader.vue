<template>
  <div class="header-background">
    <b-navbar class="navbar">
      <div class="project-name">NOTES KEEPER</div>
      <div class="log-options">
        <div class="log-in">
          <b-button pill variant="outline-dark" @click="clickOnLogInButton">
            Log in
          </b-button>
        </div>
        <div class="profile-icon" v-if="false">Icon</div>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "CustomHeader",

  methods: {
    clickOnLogInButton() {
      alert("This feature is not working yet!");
    },
  },
};
</script>

<style scoped>
.header-background {
  background-color: wheat;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1% 4%;
}

.project-name {
  font-size: 150%;
}

.log-options {
  display: flex;
}

.log-in {
  margin: 5px;
}
</style>
