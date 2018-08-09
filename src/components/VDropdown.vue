<template>
  <div class="v-dropdown">
    <span v-on:click="toggleContent" class="v-droptoggle">{{ title }}</span>
    <ul v-show="showContent">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
    <slot/>
  </div>
</template>

<script>
  export default {
    props: ['title'],
    data () {
      return {
        showContent: false
      }
    },
    methods: {
      toggleContent () {
        if (this.showContent === false) {
          this.showContent = true;
        } else {
          this.showContent = false;
        }
      }
    }
  }
</script>