<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>EMV Score: {{ emvScore }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <label for="eye">Eye Opening Response</label><br>
        <select id="eye" v-model.number="eye">
          <option value="4">Spontaneous–open with blinking at baseline (4)</option>
          <option value="3">Opens to verbal command, speech, or shout (3)</option>
          <option value="2">Opens to pain, not applied to face (2)</option>
          <option value="1">None (1)</option>
        </select>
      </div>

      <div class="col-sm">
        <label for="movement">Verbal Response</label><br>
        <select id="movement" v-model.number="movement">
          <option value="5">Oriented (5)</option>
          <option value="4">Confused conversation, but able to answer questions (4)</option>
          <option value="3">Inappropriate responses, words discernible (3)</option>
          <option value="2">Incomprehensible speech (2)</option>
          <option value="1">None (1)</option>
        </select>
      </div>
        
      <div class="col-sm">
        <label for="verbal">Motor Response</label><br>
        <select id="verbal" v-model.number="verbal">
          <option value="6">Obeys commands for movement (6)</option>
          <option value="5">Purposeful movement to painful stimulus (5)</option>
          <option value="4">Withdraws from pain (4)</option>
          <option value="3">Abnormal (spastic) flexion, decorticate posture (3)</option>
          <option value="2">Extensor (rigid) response, decerebrate posture (2)</option>
          <option value="1">None (1)</option>
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
    movement: 5,
    verbal: 6
  }),
  computed: {
    emvScore() {
      return this.eye + this.movement + this.verbal
    }
  }
}
</script>

<style scoped>
  select { 
    max-width: 260px; 
  }
</style>
