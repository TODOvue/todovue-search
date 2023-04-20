<template>
  <div class="tv-search">
    <i class="tv-search-icon tv-icon tv-cursor-pointer" @click="openModal"></i>
  </div>
  <div v-if="openedModal" class="tv-search-modal" @click.self="closeModal">
    <div class="tv-search-modal-content">
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
  name: "SearchBox",
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
  },
  setup(props) {
    const {
      inputValue,
      inputSearch,
      openedModal,
      theme,
      changeModalOpened,
      closeModal,
      openModal,
      search,
      filterResults,
    } = useSearch(props.results);

    return {
      inputValue,
      inputSearch,
      openedModal,
      theme,
      changeModalOpened,
      closeModal,
      openModal,
      search,
      filterResults,
    };
  },
  components: {
    TvButton,
  },
};
</script>

<style></style>
