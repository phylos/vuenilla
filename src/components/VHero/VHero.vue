<template>
  <div class="v-hero" :style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="wrapper">
      <div class="v-panel">
        <span v-if="$slots['hero-upper']">
          <slot name="hero-upper"></slot>
        </span>
        <h1 v-if="$slots['hero-title']">
          <slot name="hero-title"></slot>
        </h1>
        <span v-if="$slots['hero-subtitle']">
          <slot name="hero-subtitle"></slot>
        </span>
        <p v-if="$slots['hero-content']">
          <slot name="hero-content"></slot>
        </p>
        <button v-if="$slots['hero-button']">
          <slot name="hero-button"></slot>
        </button>
      </div>
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
