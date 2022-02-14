<script>
import Icon from '$components/helpers/icon.svelte';
</script>

<template lang="pug">
section
  h2 Feather Icons
  <Icon name = "coffee" strokeWidth='4' stroke='red' direction='s'/>
  <Icon name = "anchor" strokeWidth='2' stroke='red' direction='n'/>
</template>

<style lang="scss">

section {
  width: 60%;
  margin: 0 auto;
  margin-top: 100px;

  h2 {
    margin-bottom: 5px;
  }
}

</style>
