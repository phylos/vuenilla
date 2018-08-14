<template>
  <div class="v-panel">
    <div class="v-wrapper">
      <div class="v-column">
        <slot/>
      </div>
      <div class="v-column" v-if="image">
        <img :src="image" :alt="title" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['image', 'title'],
    data () {
      return {
      }
    }
  }
</script>
