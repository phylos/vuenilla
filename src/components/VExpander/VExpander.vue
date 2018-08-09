<template>
  <div class="v-expander">
    <a v-on:click="toggleExpander" href="javascript:void(0)" class="v-expander-trigger">{{ expanderTitle }}</a>
    <div v-show="showExpanderContent" class="v-expander-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['expanderTitle'],
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