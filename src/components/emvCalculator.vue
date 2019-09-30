<template>
<div>
  <input v-model.number="eye" type="number"/>
  <input v-model.number="movement" type="number"/>
  <input v-model.number="verbal" type="number"/>

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
