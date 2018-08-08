<template>
  <blockquote class="testimonial">
    <p><slot></slot></p>
    <img :src="image" :alt="quoter" />
    <cite>{{ quoter }}</cite>
  </blockquote>
</template>

<script>
  export default {
    props: ['quoter', 'image'],
    data () {
      return {
      }
    }
  }
</script>