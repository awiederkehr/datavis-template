<!-- SCRIPTS -->
<script>
import Header from '../components/header.svelte'
import ChartD3 from '../components/chartD3.svelte'
import ChartPlot from '../components/chartPlot.svelte'
</script>

<!-- DOC -->
<template lang="pug">
  <Header/>
  <ChartD3 />
  <ChartPlot />
</template>

<!-- STYLES -->
<style lang="scss">
  section {
    padding: 20px;
  }
</style>
