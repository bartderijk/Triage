<template>
  <section class="section">
      <div class="container">
        <h1 class="title">
          {{ $t("gcsScore", { score: gcs }) }}
        </h1>
        <div class="field">
            <label class="label" for="eye">{{ $t("labels.eye", { score: eye }) }}</label>
            <div class="control">
              <div class="select is-primary">
                <select id="eye" v-model.number="eye">
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
            <label class="label" for="motor">{{ $t("labels.motor", { score: motor }) }}</label>
            <div class="control">
              <div class="select is-primary">
                <select id="motor" v-model.number="motor">
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
          <label class="label" for="verbal">{{ $t("labels.verbal", { score: verbal }) }}</label>
          <div class="control">
            <div class="select is-primary">
              <select id="verbal" v-model.number="verbal">
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

export default {
  name: 'EmvCalculator',
  computed: {
    gcs() {
      return this.$store.getters.gcs;
    },
    eye: {
      get() {
        return this.$store.state.eye
      },
      set(value) {
        this.$store.commit('setEye', value)
      }
    },
    motor: {
      get() {
        return this.$store.state.motor
      },
      set(value) {
        this.$store.commit('setMotor', value)
      }
    },
    verbal: {
      get() {
        return this.$store.state.verbal
      },
      set(value) {
        this.$store.commit('setVerbal', value)
      }
    },
    helpTextEye() { return this.$t(`helpText.eye[ ${ this.eye - 1 } ]`) },
    helpTextMotor() { return this.$t(`helpText.motor[ ${ this.motor - 1 } ]`) },
    helpTextVerbal() { return this.$t(`helpText.verbal[ ${ this.verbal - 1 } ]`) }
  }
}
</script>

<style scoped>
  .title {
    margin-bottom: 16px; 
  }
</style>
