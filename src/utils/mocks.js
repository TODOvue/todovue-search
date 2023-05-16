const results = [
  {
    id: 1,
    title: "Blogs one",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 2,
    title: "Blogs two",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 3,
    title: "Blogs three",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 4,
    title: "Blogs four",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 5,
    title: "Blogs five",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 6,
    title: "Blogs six",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 7,
    title: "Blogs seven",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 8,
    title: "Blogs eight",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 9,
    title: "Blogs nine",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 10,
    title: "Blogs ten",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 11,
    title: "Blogs eleven",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 12,
    title: "Blogs twelve",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 13,
    title: "Blogs thirteen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 14,
    title: "Blogs fourteen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 15,
    title: "Blogs fifteen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 16,
    title: "Blogs sixteen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 17,
    title: "Blogs seventeen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 18,
    title: "Blogs eighteen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 19,
    title: "Blogs nineteen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
  {
    id: 20,
    title: "Blogs twenty",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "https://www.google.com",
  },
];

export const demos = [
  {
    id: 1,
    title: "TvSearch Default",
    propsData: {
      placeholder: "Type Blog",
      titleButton: "Search",
      results,
    },
    html: `<!-- You can open the search component with Ctrl + f or Command + f -->
<template>
  <tv-search
    placeholder="Type Blog"
    titleButton="Search"
    :results="results"
  />
</template>

<script>
import TvSearch from "tv-search";

export default {
  components: {
    TvSearch,
  },
  setup() {
    const results = [
      {
        id: 1,
        title: "Blogs one",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      ...
    ];
    return {
      results,
    };
  }
}
</script>`,
  },
  {
    id: 2,
    title: "TvSearch custom styles",
    propsData: {
      placeholder: "Type Blog",
      titleButton: "Search",
      results,
      customStyles: {
        bgBody: "#1e1d23",
        bgInput: "#8673a1",
        bgButton: "#80286e",
        colorButton: "#d7c9c9",
      },
    },
    html: `<!-- You can open the search component with Ctrl + f or Command + f -->
<template>
  <tv-search
    placeholder="Type Blog"
    titleButton="Search"
    :results="results"
    :customStyles="customStyles"
  />
</template>

<script>
import { ref } from "vue";
import TvSearch from "tv-search";

export default {
  components: {
    TvSearch,
  },
  setup() {
    const results = [
      {
        id: 1,
        title: "Blogs one",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      ...
    ];
    
    const customStyles = ref({
      bgBody: "#0A4539",
      bgInput: "#284780",
      bgButton: "#80286E",
      colorButton: "#D5B7B7",
    });
    
    return {
      results,
      customStyles,
    };
  }
}
</script>`,
  },
];
