<template>
  <div id="app">
    <v-app>
      <router-view/>
      <v-footer dark>© Wahib-2018</v-footer>
    </v-app>
  </div>
</template>

<script>
import store from './vuex/index'
export default {
  name: 'app',
  store

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e7ce9f;
  background-color: black;
  /* margin-top: 60px; */
}
</style>
