<template>
  <div class="v-hero" :style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="v-hero-wrap">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['image'],
    data () {
      return {
      }
    }
  }
</script>
