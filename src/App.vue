<template>
  <div id="app">
    <emvCalculator/>
  </div>
</template>

<script>
import emvCalculator from './components/emvCalculator.vue'

export default {
  name: 'app',
  components: {
    emvCalculator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
