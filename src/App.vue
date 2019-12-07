<template>
<div>
  <div class="columns t3">
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

<style lang="scss">
  @import "../node_modules/bulma/bulma.sass";
  .t1, .t2, .t3, .t4 { transition: background-color .3s ease-in-out; }
 .t1 { background-color: $red; }
 .t2 { background-color: $yellow; }
 .t3 { background-color: $green; }
 .t4 { background-color: $grey-lighter; }
</style>
