<template>
  <div class="v-card">
    <div class="v-card-title" v-if="$slots.title">
      <slot name="title"></slot>
    </div>
    <div class="v-card-image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="v-card-content" v-if="$slots.content">
      <slot name="content"></slot>
    </div>
    <div class="v-card-button" v-if="$slots.button">
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
