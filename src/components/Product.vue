<template>
  <div class="product">
    <div class="title">
      PRODUCT
    </div>
    <div class="container-logo-2">
      <div class="container-logo">
        <a href='https://www.youtube.com/'><img src="../assets/logo.png"></a>
      </div>
      <div class="container-logo">
        <a href='https://www.youtube.com/'><img src="../assets/logo.png"></a>
      </div>
    </div>
    <div class="container-logo-2">
      <div class="container-logo">
        <a href='https://www.youtube.com/'><img src="../assets/logo.png"></a>
      </div>
      <div class="container-logo">
        <a href='https://www.youtube.com/'><img src="../assets/logo.png"></a>
      </div>
    </div>
    <div class="container-logo-2">
      <div class="container-logo">
        <a href='https://www.youtube.com/'><img src="../assets/logo.png"></a>
      </div>
      <div class="container-logo">
        <a href='https://www.youtube.com/'><img src="../assets/logo.png"></a>
      </div>
    </div>
    <div class="container-logo-2">
      <div class="container-logo">
        <a href='https://www.youtube.com/'><img src="../assets/logo.png"></a>
      </div>
      <div class="container-logo">
        <a href='https://www.youtube.com/'><img src="../assets/logo.png"></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'product'
  }
</script>

<style scoped>
  .product {
    margin-top: 150px;
    overflow-y: scroll;
  }

  .title {
    padding: 35px;
    border: 2px solid black;
  }

  .container-logo-2 {
    display: flex;
    justify-content: space-around;
  }

  .container-logo {
    height: 100%;
    width: 50%;
    padding-top: 50px;
    padding-bottom: 50px;
    border: 2px solid blue;
  }
</style>
