<script setup>
import { defineAsyncComponent } from 'vue'
import TvDemo from '@todovue/tvdemo'
import { demos } from "../utils/mocks.js";

const TvSearch = defineAsyncComponent(() => import('../components/TvSearch.vue'))

</script>

<template>
  <tv-demo
    :component="TvSearch"
    :variants="demos"
    nameComponent="TvSearch"
    npmInstall="@todovue/tvsearch"
    sourceLink="https://github.com/TODOvue/todovue-search"
    urlClone="https://github.com/TODOvue/todovue-search.git"
    version="1.0.0"
  ></tv-demo>
</template>
<style scoped>

</style>
