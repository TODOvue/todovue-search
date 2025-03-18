import Default from "./demos/default.vue?raw";
import CustomStyles from "./demos/customStyles.vue?raw";

const results = [
  {
    id: 1,
    title: 'Blog - How to use Vue 3',
    description: 'Vue 3 is the latest version of Vue.js',
    url: 'https://todovue.com/blog/how-to-use-vue-3',
  },
  {
    id: 2,
    title: 'Blog - How to use Vite',
    description: 'Vite is a build tool for modern web development',
    url: 'https://todovue.com/blog/how-to-use-vite',
  },
  {
    id: 3,
    title: 'Blog - How to use Pinia',
    description: 'Pinia is a modern store for Vue 3',
    url: 'https://todovue.com/blog/how-to-use-pinia',
  },
  {
    id: 4,
    title: 'Blog - How to use Windi CSS',
    description: 'Windi CSS is a utility-first CSS framework',
    url: 'https://todovue.com/blog/how-to-use-windi-css',
  },
  {
    id: 5,
    title: 'Blog - How to use Vitesse',
    description: 'Vitesse is a Vue 3 starter template',
    url: 'https://todovue.com/blog/how-to-use-vitesse',
  }
];

const resultHow = [
  {
    id: 1,
    title: 'How to use Vue 3',
    description: 'Vue 3 is the latest version of Vue.js',
    url: 'https://todovue.com/blog/how-to-use-vue-3',
  },
  {
    id: 2,
    title: 'How to use Vite',
    description: 'Vite is a build tool for modern web development',
    url: 'https://todovue.com/blog/how-to-use-vite',
  },
  {
    id: 3,
    title: 'How to use Pinia',
    description: 'Pinia is a modern store for Vue 3',
    url: 'https://todovue.com/blog/how-to-use-pinia',
  },
  {
    id: 4,
    title: 'How to use Windi CSS',
    description: 'Windi CSS is a utility-first CSS framework',
    url: 'https://todovue.com/blog/how-to-use-windi-css',
  },
  {
    id: 5,
    title: 'How to use Vitesse',
    description: 'Vitesse is a Vue 3 starter template',
    url: 'https://todovue.com/blog/how-to-use-vitesse',
  }
];

export const demos = [
  {
    id: 1,
    title: "TvSearch Default",
    propsData: {
      placeholder: "Type 'How'...",
      titleButton: "Search",
      results: resultHow,
    },
    html: Default,
  },
  {
    id: 2,
    title: "TvSearch custom styles",
    propsData: {
      placeholder: "Type 'Blog'...",
      titleButton: "Search",
      results,
      customStyles: {
        bgBody: "#1e1d23",
        bgInput: "#8673a1",
        bgButton: "#80286e",
        colorButton: "#d7c9c9",
      },
    },
    html: CustomStyles,
  },
];
