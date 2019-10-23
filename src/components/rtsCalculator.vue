<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="app-title">{{ $t("rtsScore", { score: 12 }) }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rtsCalculator',
}
</script>

<style scoped>
  .app-title {
    margin: 16px 0;
  }
</style>
