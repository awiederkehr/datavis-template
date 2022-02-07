<script>
import { onMount } from 'svelte';
// import * as d3 from 'd3';
import * as Plot from '@observablehq/plot';

const data = [
  {name: 'Tollak', height: 300},
  {name: 'Benji', height: 200},
  {name: 'Anna', height: 100}
]

let chart;

onMount(() => {
  chart = Plot.plot({
    marks: [
      Plot.barX(data, {x:'height', y:'name'})
    ]
  }).outerHTML;
});

</script>

<template lang="pug">
section
  h2 Who is the goodest pet on the internet?
  p.dek Pets in the Wiederkehr household by goodest
  <div class="chart">{@html chart}</div>
</template>

<style lang="scss">

section {
  width: 60%;
  margin: 0 auto;
  margin-top: 100px;

  h2 {
    margin-bottom: 5px;
  }

  p.dek {
      font-family: $plexSans;
      font-size: 16px;
      margin-bottom: 15px;
    }

  .chart :global(div) {
		font: 14px $plexMono;
    font-weight: 600;
		background-color: $orange;
		text-align: right;
		padding: 10px;
		margin: 1px;
		color: white;
  }
}

</style>
