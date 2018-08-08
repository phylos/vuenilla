<template>
  <div class="v-slider">
    <slot />
    <ul v-if="circles" class="v-slide-circles">
      <li v-for="slide in slides" :key="slide.id" :class="{ 'slideActive': slide.slideActive }">
        <a :href="slide.href" @click="slideClicked(slide)">O</a>
      </li>
    </ul>
    <!--<div v-if="arrows" class="slider-arrows"> 
      <a href="#" @click="slidePrevious(slide)">Previous</a>
      <a href="#" @click="slideNext(slide)">Next</a>
    </div>-->
  </div>
</template>

<script>
  export default {
    props: {
      arrows: Boolean,
      circles: Boolean
    },
    data () {
      return { 
        slides: [] 
      }
    },

    created() {
      this.slides = this.$children;
    },
    
    methods: {
      slideClicked(slideClicked) {
        this.slides.forEach(slide => {
          slide.slideActive = (slide.href == slideClicked.href);
        });
      },
      slidePrevious(slideClicked) {
        console.log('Previous slide');
      },
      slideNext(slideNext) {
        console.log('Next slide');
      }
    }
  }
</script>



