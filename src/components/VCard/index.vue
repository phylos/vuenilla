<template>
  <div class="v-card">
    <div class="v-card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="v-card-image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="v-card-content" v-if="$slots.content">
      <slot name="content"></slot>
    </div>
    <div class="v-card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
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
