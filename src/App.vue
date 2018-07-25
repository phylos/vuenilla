<template>
  <div id="app">
    <img src="./assets/logo-vuenilla.svg">
    <h1>{{ msg }}</h1>

    <v-tabs>
      <v-tab title="One" :selected="true">
        <p>Tab content for first tab.</p>
      </v-tab>
      <v-tab title="Two">
        <p>Tab content for second tab.</p>
      </v-tab>
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
