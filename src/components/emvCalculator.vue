<template>
<div>
  <label for="eye">Eye Opening Response</label>
  <select id="eye" v-model.number="eye">
    <option value="4">Spontaneous–open with blinking at baseline (4)</option>
    <option value="3">Opens to verbal command, speech, or shout (3)</option>
    <option value="2">Opens to pain, not applied to face (2)</option>
    <option value="1">None (1)</option>
  </select><br>

  <label for="movement">Verbal Response</label>
  <select id="movement" v-model.number="movement">
    <option value="5">Oriented (5)</option>
    <option value="4">Confused conversation, but able to answer questions (4)</option>
    <option value="3">Inappropriate responses, words discernible (3)</option>
    <option value="2">Incomprehensible speech (2)</option>
    <option value="1">None (1)</option>
  </select><br>

  <label for="verbal">Motor Response</label>
  <select id="verbal" v-model.number="verbal">
    <option value="6">Obeys commands for movement (6)</option>
    <option value="5">Purposeful movement to painful stimulus (5)</option>
    <option value="4">Withdraws from pain (4)</option>
    <option value="3">Abnormal (spastic) flexion, decorticate posture (3)</option>
    <option value="2">Extensor (rigid) response, decerebrate posture (2)</option>
    <option value="1">None (1)</option>
  </select>

  <h1>{{ emvScore }}</h1>
</div>
</template>

<script>
export default {
  name: 'emvCalculator',
  data: () => ({
    eye: 0,
    movement: 0,
    verbal: 0
  }),
  computed: {
    emvScore() {
      return this.eye + this.movement + this.verbal
    }
  }
}
</script>

<style scoped>

</style>
