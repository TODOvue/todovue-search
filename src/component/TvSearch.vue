<template>
  <div class="tv-search">
    <i class="tv-search-icon tv-icon tv-cursor-pointer" @click="openModal"></i>
  </div>
  <div
    v-if="openedModal"
    class="tv-search-modal"
    @click.self="closeModal"
    :style="custom.bgBody"
  >
    <div class="tv-search-modal-content" :style="custom.bgInput">
      <div class="tv-search-modal-content-input">
        <input
          type="text"
          v-model="inputValue"
          @keyup.enter="search"
          :placeholder="placeholder"
          class="tv-search-input"
          :class="{ 'tv-radius-none-bl': filterResults.length >= 1 }"
          ref="inputSearch"
        />
        <tv-button
          isRounded
          icon="search-light"
          @click="search"
          :class="{ 'tv-radius-none-br': filterResults.length >= 1 }"
          :customStyle="custom.customButton"
        >
          {{ titleButton }}
        </tv-button>
      </div>
      <div class="tv-search-results" v-if="filterResults.length >= 1">
        <template v-for="result in filterResults" :key="result.id">
          <p class="tv-search-results-title tv-cursor-pointer" @click="search">
            {{ result.title }}
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import TvButton from "todovue-button";
import useSearch from "@/composables/useSearch";
export default {
  name: "TvSearch",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    titleButton: {
      type: String,
      default: "",
    },
    results: {
      type: Array,
      default: () => [],
    },
    customStyles: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const {
      inputValue,
      inputSearch,
      openedModal,
      changeModalOpened,
      closeModal,
      openModal,
      search,
      filterResults,
      custom,
    } = useSearch(props);

    return {
      inputValue,
      inputSearch,
      openedModal,
      changeModalOpened,
      closeModal,
      openModal,
      search,
      filterResults,
      custom,
    };
  },
  components: {
    TvButton,
  },
  emits: ["search"],
};
</script>

<style scoped lang="scss" src="../assets/scss/style.scss"></style>
