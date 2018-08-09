<template>
  <div class="v-modal">
    <a v-on:click="toggleModal" class="v-modal-trigger">{{ trigger }}</a>
    <div v-show="showModalContent" class="v-modal-wrapper">
      <a class="v-modal-close">X</a>
      <div class="v-modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['trigger'],
    data () {
      return {
        showModalContent: false
      }
    },
    methods: {
      toggleModal () {
        if (this.showModalContent === false) {
          this.showModalContent = true;
        } else {
          this.showModalContent = false;
        }
      }
    }
  }
</script>
