<template>
  <div v-show="slideActive" class="v-slide-content">
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      title: { required: true },
      selected: { default: false }
    },

    data() {
      return {
        slideActive: false
      };
    },

    computed: {
      href() {
        return '#' + this.title.toLowerCase().replace(/ /g, '-');
      }
    },

    mounted() {
      this.slideActive = this.selected;
    }
  }
</script>
