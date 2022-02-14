<script>
import { onMount } from 'svelte';
import teams from '$data/TeamGS.csv';
import * as d3 from 'd3';

console.log(teams);

let chart;

onMount(() => {

  // draw the svg and chart
  var svg = d3.select('#myChart').append('svg')
    .attr('height', 450)
    .attr('width', 760)

  var chartEl = svg.append('g')
    .attr('height', 450)
    .attr('width', 760)
    .attr('class', 'chart')

  // define xDomain and xScale
  const xExtent = d3.extent(teams, function (d) { return d.Year;});
  const xDomain = xExtent;

  const xScale = d3.scaleLinear()
    .domain(xDomain)
    .range([0, 760]);

  // define xDomain and xScale
  const yExtent = d3.extent(teams, function (d) { return +d.gameScore;});
  const yDomain = yExtent;

  const yScale = d3.scaleLinear()
    .domain(yExtent)
    .range([0, 450]);

  // define axes and call them
  const xAxis = d3.axisBottom(xScale)
    .tickSize(30)
    .ticks(10)
    .tickValues(null)
    .tickFormat(d3.format('d'))

  chartEl.append('g')
    .attr('class', 'axis-x')
    .call(xAxis)

  const yAxis = d3.axisLeft(yScale)
    .tickSize(40)
    .ticks(5)
    .tickValues(null)
    .tickFormat(d3.format('d'))

  chartEl.append('g')
    .attr('class', 'axis-y')
    .call(yAxis)

  // group the teams so we can draw individual lines
  var sumStat = d3.group(teams, d => d.team)

  // create color palette
  var res = Array.from(sumStat.keys()); // 18 nations
  var color = d3.scaleOrdinal()
    .domain(res)
    .range(['#B0171F', '#EEAEEE', '#B23AEE', '#0000FF', '#A2B5CD', '#7EC0EE', '#8EE5EE', '#79CDCD', '#00CD66', '#9ACD32', '#DAA520', '#EED8AE', '#FF7F00', '#8A360F', '#EE6A50', '#7D9EC0'])

  // draw the chart
  chartEl.selectAll('path')
    .data(sumStat)
    .join('path')
      .attr('fill', 'none')
      .attr('stroke-width', 3)
      // .attr('stroke', 'red')
      .attr('stroke', d => color(d[0]))
      .attr('d', d => {
        return d3.line()
          .x(d => xScale(d.Year))
          .y(d => yScale(+d.gameScore))
          .curve(d3.curveStepAfter)
          (d[1])
      })

});

</script>

<template lang="pug">
section
  h2 Who is the goodest pet on the internet?
  p.dek Pets in the Wiederkehr household by goodest
  <div bind:this={chart} class='chart' id='myChart'></div>

</template>

<style lang="scss">

section {
  width: 60%;
  margin: 0 auto;

  h2 {
    margin-bottom: 5px;
  }

  p.dek {
      font-family: $plexSans;
      font-size: 16px;
      margin-bottom: 15px;
    }

  #myChart.chart {


    svg {
        background: #f0f0f0;
        overflow: visible;

          g {
            .chart {
              /* TK */
            }
            .axis-x {
              .domain {
                display: none;
              }
            }
            .axis-y {
              transform: translateX(80px);
            }
        }
    }
  }
}

</style>
