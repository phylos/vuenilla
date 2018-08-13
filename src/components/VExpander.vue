<template>
  <div class="v-expander">
    <a v-on:click="toggleExpander" href="javascript:void(0)" class="v-expander-trigger">{{ title }}</a>
    <div v-show="showExpanderContent" class="v-expander-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title'],
    data () {
      return {
        showExpanderContent: false
      }
    },
    methods: {
      toggleExpander () {
        if (this.showExpanderContent === false) {
          this.showExpanderContent = true;
        } else {
          this.showExpanderContent = false;
        }
      }
    }
  }
</script>