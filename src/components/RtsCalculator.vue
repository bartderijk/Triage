<template>
  <section class="section">
      <div class="container">
        <h1 class="title">
          {{ $t("rtsScore", { score: rts }) }}
        </h1>
        <div class="field">
            <label class="label">{{ $t("labels.gcs", { score: gcsRtsScore }) }}</label>
            <div class="control">
              <input class="input is-primary gcs-rts-input" :value="gcs" type="text" disabled />
            </div>
            <p class="help">{{ $t("helpText.gcs", { gcs: gcs, score: gcsRtsScore }) }}</p>
        </div>
        <div class="field">
            <label class="label" for="sbp">{{ $t("labels.sbp", { score: systolicBloodPressureScore }) }}</label>
            <div class="control">
              <div class="select is-primary">
                <select id="sbp" v-model.number="systolicBloodPressureScore">
                  <option value="4">> 89</option>
                  <option value="3">76-89</option>
                  <option value="2">50-75</option>
                  <option value="1">1-49</option>
                  <option value="0">0</option>
                </select>
              </div>
            </div>
            <p class="help">{{ $t("helpText.sbp", { score: systolicBloodPressureScore }) }}</p>
        </div>
        <div class="field">
          <label class="label" for="rr">{{ $t("labels.rr", { score: respiratoryRateScore }) }}</label>
          <div class="control">
            <div class="select is-primary">
              <select id="verbal" v-model.number="respiratoryRateScore">
                <option value="4">10-29</option>
                <option value="3">> 29</option>
                <option value="2">6-9</option>
                <option value="1">1-5</option>
                <option value="0">0</option>
              </select>
            </div>
          </div>
        </div>
        <p class="help">{{ $t("helpText.rr", { score: respiratoryRateScore }) }}</p>
      </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  name: 'RtsCalculator',
  computed: {
    ...mapState(['sbpRtsScore', 'rrRtsScore']),
    ...mapGetters(['gcs', 'rts']),
    systolicBloodPressureScore: {
      get() {
        return this.sbpRtsScore;
      },
      set(value) {
        this.setSbpRtsScore(value);
      }
    },
    respiratoryRateScore: {
      get() {
        return this.rrRtsScore;
      },
      set(value) {
        this.setRrRtsScore(value)
      }
    },
    gcsRtsScore() {
        // @TODO Consider moving this to the store
        let gcsRtsScore;

        if (this.gcs <= 15 && this.gcs >= 13) {
          gcsRtsScore = 4;
        } else if (this.gcs <= 12 && this.gcs >= 9) {
          gcsRtsScore = 3;
        } else if (this.gcs <= 8 && this.gcs >= 6) {
          gcsRtsScore = 2;
        } else if (this.gcs === 5 || this.gcs === 4) {
          gcsRtsScore = 1;
        } else {
          gcsRtsScore = 0;
        }

        this.setGcsRtsScore(gcsRtsScore);
        
        return gcsRtsScore;
    }
  },
  methods: {
    ...mapMutations(['setSbpRtsScore', 'setRrRtsScore', 'setGcsRtsScore'])
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
