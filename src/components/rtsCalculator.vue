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
  name: 'RtsCalculator',
  computed: {
    gcs() {
      return this.$store.getters.gcs;
    },
    rts() { 
      return this.$store.getters.rts;
    },
    sbpRtsScore: {
      get() {
        return this.$store.state.sbpRtsScore;
      },
      set(value) {
        this.$store.commit('setSbpRtsScore', value);
      }
    },
    rrRtsScore: {
      get() {
        return this.$store.state.rrRtsScore;
      },
      set(value) {
        this.$store.commit('setRrRtsScore', value);
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

        this.$store.commit('setGcsRtsScore', gcsRtsScore);
        
        return gcsRtsScore;
    }
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
