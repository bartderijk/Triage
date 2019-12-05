<template>
  <section class="section">
      <div class="container">
        <h1 class="title">
          {{ $t("rtsScore", { score: rtsScore }) }}
        </h1>
        <div class="field">
            <label class="label">{{ $t("labels.gcs", { score: gcsRtsScore }) }}</label>
            <div class="control">
              <input class="input is-primary gcs-rts-input" :value="gcs" type="text" disabled />
            </div>
            <p class="help">{{ $t("helpText.gcs", { gcs: gcs, score: gcsRtsScore }) }}</p>
        </div>
        <div class="field">
            <label class="label" for="sbp">{{ $t("labels.sbp", { score: sbpRtsScore }) }}</label>
            <div class="control">
              <div class="select is-primary">
                <select id="sbp" v-model.number="sbpRtsScore">
                  <option value="4">> 89</option>
                  <option value="3">76-89</option>
                  <option value="2">50-75</option>
                  <option value="1">1-49</option>
                  <option value="0">0</option>
                </select>
              </div>
            </div>
            <p class="help">{{ $t("helpText.sbp", { score: sbpRtsScore }) }}</p>
        </div>
        <div class="field">
          <label class="label" for="rr">{{ $t("labels.rr", { score: rrRtsScore }) }}</label>
          <div class="control">
            <div class="select is-primary">
              <select id="verbal" v-model.number="rrRtsScore">
                <option value="4">10-29</option>
                <option value="3">> 29</option>
                <option value="2">6-9</option>
                <option value="1">1-5</option>
                <option value="0">0</option>
              </select>
            </div>
          </div>
        </div>
        <p class="help">{{ $t("helpText.rr", { score: rrRtsScore }) }}</p>
      </div>
  </section>
</template>

<script>
export default {
  name: 'rtsCalculator',
  data: () => ({
    gcs: 15,
    gcsRtsScore: 4,
    sbpRtsScore: 4,
    rrRtsScore: 4
  }),
  computed: {
    rtsScore() { return this.gcsRtsScore + this.sbpRtsScore + this.rrRtsScore }
  }
}
</script>

<style scoped>
  .title {
    margin-bottom: 16px; 
  }

  .gcs-rts-input {
    max-width: 160px;
  }
</style>
