<template>
  <div v-show="tabActive" class="v-tab-content">
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
        tabActive: false
      };
    },

    computed: {
      href() {
        return '#' + this.title.toLowerCase().replace(/ /g, '-');
      }
    },

    mounted() {
      this.tabActive = this.selected;
    }
  }
</script>
