<template>
  <div :class="'v-button ' + size + ' ' + color">
    <a :href="href" class="v-button-link">
      <span class="v-button-text"><slot/></span>
    </a>
  </div>
</template>

<script>
  export default {
    props: ['href', 'color', 'size'],
    data () {
      return {
      }
    }
  }
</script>