<template>
  <div class="v-card">
    <div class="v-title" v-if="$slots.title">
      <slot name="title"></slot>
    </div>
    <div class="v-image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="v-content" v-if="$slots.content">
      <slot name="content"></slot>
    </div>
    <div class="v-button" v-if="$slots.button">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
