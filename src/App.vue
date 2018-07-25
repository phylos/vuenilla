<template>
  <div id="app">
    <img src="./assets/logo-vuenilla.svg">
    <h1>{{ msg }}</h1>
    
    <v-tabs>
      <template slot="trigger">Tab trigger</template>
      <template slot="content">Tab content</template>
    </v-tabs>

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

img {
  width: 320px;
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
