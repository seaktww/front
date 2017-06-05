<template>
  <div class="homepage">
    <div class="slide">
        <carousel-3d :width="1024" :height="500" :autoplay="true" :autoplay-timeout="5000" :display="1"
          :controls-visible="true">
          <slide :index="0">
            slide view 1
          </slide>
          <slide :index="1">
            slide view 2
          </slide>
          <slide :index="2">
            slide view 3
          </slide>
          <slide :index="3">
            slide view 4
          </slide>
          <slide :index="4">
            slide view 5
          </slide>
        </carousel-3d>
      </div>

      <div class="container-brand">
        <div class="brand">
          <img src="../assets/logo.png">
        </div>
        <div class="brand">
          <img src="../assets/logo.png">
        </div>
        <div class="brand">
          <img src="../assets/logo.png">
        </div>
        <div class="brand">
          <img src="../assets/logo.png">
        </div>
        <div class="brand">
          <img src="../assets/logo.png">
        </div>
        <div class="brand">
          <img src="../assets/logo.png">
        </div>
        <div class="brand">
          <img src="../assets/logo.png">
        </div>
        <div class="brand">
          <img src="../assets/logo.png">
        </div>
      </div>

      <div class="container-newevent">
        <div class="title">News & Events</div>
        <div class="container-newevent-content">
          <!-- <img src="#"> -->
          <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit quis felis at bibendum. Nullam quis justo elit. Nam condimentum sapien lobortis nibh tincidunt volutpat. Duis finibus justo nisi, sed laoreet sapien mollis at. Aenean venenatis, sem in interdum sagittis, sem libero bibendum felis, vel ullamcorper turpis purus non purus. Integer dictum dapibus diam, efficitur venenatis justo pulvinar ut. Curabitur justo mauris, consequat in urna ac, consectetur accumsan elit.

  Phasellus venenatis efficitur est eu aliquet. Mauris dolor velit, dapibus quis nibh ac, mollis feugiat nisl. I
          </div>
        </div>
        <div class="container-newevent-content">
          <!-- <img src="#"> -->
          <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit quis felis at bibendum. Nullam quis justo elit. Nam condimentum sapien lobortis nibh tincidunt volutpat. Duis finibus justo nisi, sed laoreet sapien mollis at. Aenean venenatis, sem in interdum sagittis, sem libero bibendum felis, vel ullamcorper turpis purus non purus. Integer dictum dapibus diam, efficitur venenatis justo pulvinar ut. Curabitur justo mauris, consequat in urna ac, consectetur accumsan elit.

  Phasellus venenatis efficitur est eu aliquet. Mauris dolor velit, dapibus quis nibh ac, mollis feugiat nisl. I
          </div>
        </div>
      </div>

      <div class="container-location">
        <div class="title">Dealership locator</div>
        <div class="container-contact-content">
          <div class="contact">
            <p>vespa</p>
            <p>240/444 rr Road 10234</p>
            <p>02-456-8847</p>
          </div>
          <div class="contact">
            <p>vespa</p>
            <p>240/444 rr Road 10234</p>
            <p>02-456-8847</p>
          </div>
          <div class="contact">
            <p>vespa</p>
            <p>240/444 rr Road 10234</p>
            <p>02-456-8847</p>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'homepage',
  components: {
    Carousel3d,
    Slide
  }
}
</script>

<style scoped>

/*all section*/
.homepage {
  margin-top: 80px;
  padding-top: 20px;
  overflow-y: scroll;
}
.title {
  padding-left: 25px;
  padding: 30px;
}
.content {
  border: 2px solid black;
  padding: 15px;
}

/*section logo*/
.container-brand {
  border: 2px solid green;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
.brand img {
  border: 2px solid black;
  padding: 15px;
  width: 50px;
  height: 50px;
}

/*section new event*/
.container-newevent {
  border: 2px solid green;
}
.container-newevent-content {
  border: 2px solid red;
  display: flex;
  justify-content: space-around;
}
.container-newevent-content img {
  padding: 15px;
  width: 300px;
  height: 200px;
}

/*section location*/
.container-location {
  border: 1px solid red;
}
.container-contact-content {
  border: 2px solid green;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  margin-bottom: 30px;
}
.contact {
  border: 1px solid red;
  padding: 15px;
}


</style>
