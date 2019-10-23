<template>
  <div id="app">
    <emvCalculator/>
    <hr>
    <rtsCalculator/>
  </div>
</template>

<script>
import emvCalculator from './components/emvCalculator.vue'
import rtsCalculator from './components/rtsCalculator.vue'

export default {
  name: 'app',
  components: {
    emvCalculator,
    rtsCalculator
  }
}
</script>

<style>

</style>
