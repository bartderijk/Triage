<template>
<div :class="triageClass">
  <nav class="level scores is-mobile">
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">{{ $t("topHeader.gcs") }}</p>
        <p class="title is-4">{{ gcs}}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">{{ $t("topHeader.rts") }}</p>
        <p class="title is-4">{{ rts }}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">{{ $t("topHeader.triage") }}</p>
        <p class="title is-4 triage-class">{{ triageClass }}</p>
      </div>
    </div>
  </nav>
  <div class="columns calculator">
    <div class="column">
      <emvCalculator/>
    </div>
    <hr>
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
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {
    emvCalculator,
    rtsCalculator
  },
  computed: {
    ...mapGetters(['gcs', 'rts']),
    triageClass() {
      if (this.rts === 12) {
        return 't3';
      } else if (this.rts === 11) {
        return 't2';
      } else if (this.rts >= 3 && this.rts <= 10) {
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

  .scores {
    background-color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 8px 0;
    z-index: 100;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
  }

  .triage-class {
    text-transform: uppercase;
  }

  .calculator {
    margin-top: 64px !important;
  }
</style>
