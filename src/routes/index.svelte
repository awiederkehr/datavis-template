<!-- SCRIPTS -->
<script>
import Header from '../components/header.svelte'
</script>

<!-- DOC -->
<template lang="pug">
  <Header/>

  section
    h1 Chart example
    h2 A witty chart headline
    p.dek This is a chart about tk tk from 2009-2021
    .chart
</template>

<!-- STYLES -->
<style lang="scss">
  section {
    padding: 20px;

    h1 {
      margin-bottom: 20px;
    }

    h2 {
      margin-bottom: 5px;
    }

    p.dek {
        font-family: $plexSans;
        font-size: 16px;
        margin-bottom: 15px;
    }

    .chart {
      max-width: 575px;
      height: 300px;
      background-color: #f0f0f0;
    }
  }
</style>
