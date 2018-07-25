<template>
  <div class="v-accordion">
    <div class="v-accordion-trigger" v-if="$slots.trigger">
      <slot name="trigger"></slot>
    </div>
    <div class="v-accordion-content" v-if="$slots.content">
      <slot name="content"></slot>
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