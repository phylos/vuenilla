<template>
  <div class="alert">
    <slot/>
  </div>
</template>

<script>
  export default {
    props: ['type', 'color'],
    data () {
      return {
      }
    }
  }
</script>
