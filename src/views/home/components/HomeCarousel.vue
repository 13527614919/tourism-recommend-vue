<template>
  <div >
    <Carousel autoplay v-model="value" loop :autoplay-speed="5000">
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../../../assets/img/homePage/carousel_one.jpg" class="carousel_img" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../../../assets/img/homePage/carousel_two.jpg" class="carousel_img" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../../../assets/img/homePage/carousel_three.jpg" class="carousel_img" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../../../assets/img/homePage/carousel_four.jpg" class="carousel_img" />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="../../../assets/img/homePage/carousel_five.jpg" class="carousel_img" />
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        value: 0
      }
    }
  }
</script>

<style>
  .carousel_img {
    width: 1100px;
    height: 350px;
  }
</style>
