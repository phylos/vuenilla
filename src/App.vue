<template>
  <div id="app">
    <img src="./assets/logo-vuenilla.svg">
    <h1>{{ msg }}</h1>

    <!--Alert-->
    <v-alert type="banner" color="orange">Hello, I'm a nifty alert.</v-alert>

    <!--Breadcrumbs-->

    <!--Card-->
    <v-card>
      <template slot="card-title">Planet Sex Test</template>
      <template slot="card-image">Image</template>
      <template slot="card-content">This is a blurb about this card.</template>
      <template slot="card-button">Order Kits</template>
    </v-card>

    <!--Carousel-->

    <!--Dropdown-->
    <v-dropdown title="Dropdown">
      <template slot="content"></template>
    </v-dropdown>

    <!--Expander-->
    <v-expander expanderTitle="Expander 1">
      This is some content for Expander 1
    </v-expander>
    <v-expander expanderTitle="Expander 2">
      This is some content for Expander 2
    </v-expander>

    <!--Form-->

    <!--Hero-->
    <v-hero image="https://via.placeholder.com/200x200">
      <template slot="hero-upper">Plant Sex Test</template>
      <template slot="hero-title">No More Guesswork.</template>
      <template slot="hero-subtitle">Just Correct Results.</template>
      <template slot="hero-content">Force flowering cannabis and hemp plants can reduce yields as much as 20%.</template>
      <template slot="hero-button">Order Kits</template>
    </v-hero>

    <!--Icon-->

    <!--List-->

    <!--Modal-->

    <!--Pagination-->

    <!--Slab-->

    <!--Table-->

    <!--Tabs-->
    <v-tabs>
      <v-tab title="One" :selected="true">
        <p>Tab content for first tab.</p>
      </v-tab>
      <v-tab title="Two">
        <p>Tab content for second tab.</p>
      </v-tab>
    </v-tabs>

    <!--Testimonial-->
    <v-testimonial quoter="Phylos" image="https://via.placeholder.com/200x200">
      This is a testimonial.
    </v-testimonial>

    <!--Tooltip-->

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
