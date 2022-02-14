<!-- SCRIPTS -->
<script>
import Header from '../components/header.svelte'
import ChartD3 from '../components/chartD3.svelte'
import ChartPlot from '../components/chartPlot.svelte'
import FeatherIcons from '../components/FeatherIcons.svelte'
import Textures from '../components/textures.svelte'
</script>

<!-- DOC -->
<template lang="pug">
  <Header/>
  <ChartD3 />
  <ChartPlot />
  <FeatherIcons />
  <Textures />
</template>

<!-- STYLES -->
<style lang="scss">
  section {
    padding: 20px;
  }
</style>
