<template>
  <div id="app">
    <img src="./assets/logo-vue.png">
    <h1>{{ msg }}</h1>
    <v-accordion></v-accordion>
    <v-alert></v-alert>
    <v-breadcrumbs></v-breadcrumbs>
    <v-button></v-button>
    <v-card></v-card>
    <v-carousel></v-carousel>
    <v-dropdown></v-dropdown>
    <v-expander></v-expander>
    <v-form></v-form>
    <v-hero></v-hero>
    <v-icon></v-icon>
    <v-list></v-list>
    <v-modal></v-modal>
    <v-pagination></v-pagination>
    <v-slab></v-slab>
    <v-table></v-table>
    <v-tabs></v-tabs>
    <v-testimonial></v-testimonial>
    <v-toast></v-toast>
    <v-tooltip></v-tooltip>
    <p>Built by:</p>
    <img src="./assets/logo-phylos.svg">
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Unstyled Vue.js component library.'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
