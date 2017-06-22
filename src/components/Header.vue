<template>
  <div class="header">
    <div class="container-logo">
      <img src="../assets/logo.png">
    </div>
    <div class="container-link">
      <router-link to="/">Hello</router-link>
      <router-link to="/homepage">Homepage</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style scoped>
  .header {
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    display: flex;
    border: 2px solid green;
    background-color: white;
    padding: 25px;
  }

  .container-logo img {
    width: 80px;
    height: 80px;
    margin-left: 35px;
    margin-right: 35px;
  }

  .container-link a {
    padding-left: 10px;
  }
</style>
