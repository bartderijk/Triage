<template>
<div>
  <div class="columns">
    <div class="column">
      <emvCalculator/>
    </div>
    <div class="column">
      <rtsCalculator/>
    </div>
  </div>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Triage</strong> by <a href="https://bartderijk.com">Bart de Rijk</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The application content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
      </p>
    </div>
</footer>
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
