<template>
  <div v-show="tabActive" class="v-tab-content">
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      name: { required: true },
      selected: { default: false }
    },

    data() {
      return {
        tabActive: false
      };
    },

    computed: {
      href() {
        return '#' + this.name.toLowerCase().replace(/ /g, '-');
      }
    },

    mounted() {
      this.tabActive = this.selected;
    }
  }
</script>
