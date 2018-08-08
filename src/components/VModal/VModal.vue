<template>
  <div class="modal">
    <a v-on:click="toggleModal" class="modal-trigger">{{ trigger }}</a>
    <div v-show="showModalContent" class="modal-wrapper">
      <a class="modal-close">X</a>
      <div class="modal-content">
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
