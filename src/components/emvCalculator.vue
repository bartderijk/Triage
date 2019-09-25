<template>
<div>
  <input v-model="eye" type="number"/>
  <input v-model="movement" type="number"/>
  <input v-model="verbal" type="number"/>

  <h1>{{eye + movement + verbal}}</h1>
</div>
</template>

<script>
export default {
  name: 'emvCalculator',
  data: () => ({
    eye: 0,
    movement: 0,
    verbal: 0
  })
}
</script>

<style scoped>

</style>
