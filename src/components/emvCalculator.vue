<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="app-title">{{ $t("emvScore", { score: emvScore }) }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <label for="eye">{{ $t("labels.eye", { score: eye }) }}</label><br>
        <select id="eye" v-model.number="eye">
          <option value="4">{{ $t("spontaneous") }}</option>
          <option value="3">{{ $t("verbal") }}</option>
          <option value="2">{{ $t("pain") }}</option>
          <option value="1">{{ $t("noReaction") }}</option>
        </select>
      </div>

      <div class="col-sm">
        <label for="motor">{{ $t("labels.motor", { score: motor }) }}</label><br>
        <select id="motor" v-model.number="motor">
          <option value="6">{{ $t("obeysCommands") }}</option>
          <option value="5">{{ $t("localisesPain") }}</option>
          <option value="4">{{ $t("painWithdrawal") }}</option>
          <option value="3">{{ $t("painFlexion") }}</option>
          <option value="2">{{ $t("painExtension") }}</option>
          <option value="1">{{ $t("noReaction") }}</option>
        </select>
      </div>

      <div class="col-sm">
        <label for="verbal">{{ $t("labels.verbal", { score: verbal }) }}</label><br>
        <select id="verbal" v-model.number="verbal">
          <option value="5">{{ $t("oriented") }}</option>
          <option value="4">{{ $t("confused") }}</option>
          <option value="3">{{ $t("inappropriateResponses") }}</option>
          <option value="2">{{ $t("incomprehensibleSpeech") }}</option>
          <option value="1">{{ $t("noReaction") }}</option>
        </select>
      </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'emvCalculator',
  data: () => ({
    eye: 4,
    motor: 6,
    verbal: 5
  }),
  computed: {
    emvScore() {
      return this.eye + this.motor + this.verbal
    }
  }
}
</script>

<style scoped>
  .app-title {
    margin: 16px 0;
  }

  select { 
    min-width: 260px;
    height: 32px;
  }
</style>
