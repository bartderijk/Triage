<template>
<div :class="triageClass">
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
  },
  computed: {
    triageClass() {
      const rts = this.$store.getters.rts;
      if (rts === 12) {
        return 't3';
      } else if (rts === 11) {
        return 't2';
      } else if (rts >= 3 && rts <= 10) {
        return 't1';
      } else {
        return 't4';
      }
    }
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
