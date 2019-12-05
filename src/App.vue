<template>
  <div class="columns">
    <div class="column">
      <emvCalculator/>
    </div>
    <div class="column">
      <rtsCalculator/>
    </div>
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
