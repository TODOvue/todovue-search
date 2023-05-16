<template>
  <tv-demo :component="component" :variants="demos" />
</template>

<script>
import { shallowRef } from "vue";
import TvSearch from "@/component/TvSearch.vue";
import { demos } from "@/utils/mocks.js";

export default {
  name: "DemoSearch",
  setup() {
    const component = shallowRef(TvSearch);

    return {
      component,
      demos,
    };
  },
};
</script>

<style></style>
