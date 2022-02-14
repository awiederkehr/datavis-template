<script>
import { onMount } from 'svelte';
import textures from 'textures';
import * as d3 from 'd3';

// define the first texture
const texture = textures
  .lines()
  .thicker();
const textureURL = texture.url();
let svg;
// define the second texture
const textureCirc = textures
  .lines()
  .size(4)
  .strokeWidth(1);
const textureURLCirc = textureCirc.url();
let svgCirc;

// create function for the texture
const drawTextures = () => {
  svg = d3.select('.texturedSVG');
  texture(svg);

  svgCirc = d3.select('.texturedCirc');
  textureCirc(svgCirc);
};

// init
onMount(() => {
  drawTextures();
});

</script>

<template lang="pug">

  section
    h2 Textures
    <svg class= 'texturedSVG'>
      <rect style={`fill: ${textureURL}`}/>
    </svg>
    <svg class = 'texturedCirc'>
      <rect style={`fill: ${textureURLCirc}`}/>
    </svg>

</template>

<style lang="scss">

section {
  width: 60%;
  margin: 0 auto;
  margin-top: 100px;

  h2 {
    margin-bottom: 5px;
  }

  svg {
    rect {
      height: 50px;
      width: 50px;
    }
  }
}

</style>
