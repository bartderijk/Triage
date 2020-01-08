<template>
  <section class="section">
      <div class="container">
        <h1 class="title">
          {{ $t("gcsScore", { score: gcs }) }}
        </h1>
        <div class="field">
            <label class="label" for="eye">{{ $t("labels.eye", { score: eyeScore }) }}</label>
            <div class="control">
              <div class="select is-primary">
                <select id="eye" v-model.number="eyeScore">
                  <option value="4">{{ $t("spontaneous") }}</option>
                  <option value="3">{{ $t("verbal") }}</option>
                  <option value="2">{{ $t("pain") }}</option>
                  <option value="1">{{ $t("noReaction") }}</option>
                </select>
              </div>
            </div>
            <p v-if="eye" class="help">{{ helpTextEye }}</p>
        </div>
        <div class="field">
            <label class="label" for="motor">{{ $t("labels.motor", { score: motorScore }) }}</label>
            <div class="control">
              <div class="select is-primary">
                <select id="motor" v-model.number="motorScore">
                  <option value="6">{{ $t("obeysCommands") }}</option>
                  <option value="5">{{ $t("localisesPain") }}</option>
                  <option value="4">{{ $t("painWithdrawal") }}</option>
                  <option value="3">{{ $t("painFlexion") }}</option>
                  <option value="2">{{ $t("painExtension") }}</option>
                  <option value="1">{{ $t("noReaction") }}</option>
                </select>
              </div>
            </div>
            <p v-if="motor" class="help">{{ helpTextMotor }}</p>
        </div>
        <div class="field">
          <label class="label" for="verbal">{{ $t("labels.verbal", { score: verbalScore }) }}</label>
          <div class="control">
            <div class="select is-primary">
              <select id="verbal" v-model.number="verbalScore">
                <option value="5">{{ $t("oriented") }}</option>
                <option value="4">{{ $t("confused") }}</option>
                <option value="3">{{ $t("inappropriateResponses") }}</option>
                <option value="2">{{ $t("incomprehensibleSpeech") }}</option>
                <option value="1">{{ $t("noReaction") }}</option>
              </select>
            </div>
          </div>
          <p v-if="verbal" class="help">{{ helpTextVerbal }}</p>
        </div>
      </div>
  </section>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';

export default {
  name: 'EmvCalculator',
  computed: {
    ...mapGetters(['gcs']),
    ...mapState(['eye', 'motor', 'verbal']),
    eyeScore: {
      get() {
        return this.eye
      },
      set(value) {
        this.setEye(value);
      }
    },
    motorScore: {
      get() {
        return this.motor
      },
      set(value) {
        this.setMotor(value);
      }
    },
    verbalScore: {
      get() {
        return this.verbal
      },
      set(value) {
        this.setVerbal(value);
      }
    },
    helpTextEye() { return this.$t(`helpText.eye[ ${ this.eye - 1 } ]`) },
    helpTextMotor() { return this.$t(`helpText.motor[ ${ this.motor - 1 } ]`) },
    helpTextVerbal() { return this.$t(`helpText.verbal[ ${ this.verbal - 1 } ]`) }
  },
  methods: {
    ...mapMutations(['setEye', 'setMotor', 'setVerbal'])
  }
}
</script>

<style scoped>
  .title {
    margin-bottom: 16px; 
  }
</style>
