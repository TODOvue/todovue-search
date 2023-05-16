<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TODOvue Search

[![npm](https://img.shields.io/npm/v/todovue-search.svg)](https://www.npmjs.com/package/todovue-search) [![Netlify Status](https://api.netlify.com/api/v1/badges/c6992bf1-ed06-4d9b-8b77-752254880951/deploy-status)](https://app.netlify.com/sites/todovue-search/deploys) [![Pipeline](https://github.com/TODOvue/todovue-search/actions/workflows/pipeline.yml/badge.svg?branch=master)](https://github.com/TODOvue/todovue-search/actions/workflows/pipeline.yml) [![npm](https://img.shields.io/npm/dm/todovue-search.svg)](https://www.npmjs.com/package/todovue-search) [![npm](https://img.shields.io/npm/dt/todovue-search.svg)](https://www.npmjs.com/package/todovue-search) ![GitHub](https://img.shields.io/github/license/TODOvue/todovue-search) ![GitHub Release Date](https://img.shields.io/github/release-date/TODOvue/todovue-search)

<img width="300" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvSearch%2Fsearch.png?alt=media&token=7ffcc356-3c08-4978-9543-cd4f8e27e478" alt="TODOvue Search"> <img width="300" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvSearch%2Ftvsearch%20custom.png?alt=media&token=9b046cd0-e087-4d26-a2b1-899d5c8116ba" alt="TODOvue Search custom">

## Table of Contents
- [Demo](https://todovue-search.netlify.app/)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Events](#events)
- [Customize](#customize)
- [Development](#development)
- [Changelog](https://github.com/TODOvue/todovue-search/blob/master/CHANGELOG.md)
- [Contributing](https://github.com/TODOvue/todovue-search/blob/master/CONTRIBUTING.md)
- [License](https://github.com/TODOvue/todovue-search/search/master/LICENSE)

## Installation
Install with npm or yarn
```bash
npm install todovue-search
```
```bash
yarn add todovue-search
```
Import
```js
import { TvSearch } from 'todovue-search'
```

You can also import it directly in the **main.js** file, so you don't have to import it in the pages
```js
import { createApp } from "vue";
import App from "./App.vue";
import TvSearch from "todovue-search";

const app = createApp(App);
app.component("TvSearch", TvSearch);
app.mount("#app");
```

## Usage
You can open the search component with Ctrl + f or Command + f
```js
<template>
  <tv-search
    placeholder="Search blog..."
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
</script>
```

## Props
| Name         | Type   | Default                    | Description       |
|--------------|--------|----------------------------|-------------------|
| placeholder  | String | `""`                       | Placeholder input |
| titleButton  | String | `""`                       | Title button      |
| results      | Array  | `[]`                       | Array of results  |
| customStyles | Object | [See below](#customStyles) | Custom styles     |

### customStyles
| Name        | Type   | Default     | Description             |
|-------------|--------|-------------|-------------------------|
| bgBody      | String | `"#0E131F"` | Background color body   |
| bgInput     | String | `"#B9C4DF"` | Background color input  |
| bgButton    | String | `"#Ef233C"` | Background color button |
| colorButton | String | `"#F4FAFF"` | Color button            |

## Events
| Name   | Description                       |
|--------|-----------------------------------|
| search | Event when the search is executed |

## Customize
You can customize the component by customStyles, you can see the [props](#props) section to see the available options
```js
const customStyles = {
    bgBody: "#0A4539",
    bgInput: "#284780",
    bgButton: "#80286E",
    colorButton: "#D5B7B7",
};
```
```js
<template>
  <tv-search
    placeholder="Search blog..."
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
</script>
```


## Development
Clone the repository and install the dependencies
```bash
git clone https://github.com/TODOvue/todovue-search.git
```
```bash
cd todovue-search
```

Install the dependencies
```bash
yarn install
```
Run the project
```bash
yarn demo
```
Run the tests
```bash
yarn test:unit
```
Run the linter
```bash
yarn lint
```
Run the build It is not necessary to generate build, since it is generated when you do PR to the master branch
```bash
yarn build
```

## License
[MIT](https://github.com/TODOvue/todovue-search/blob/master/LICENSE)

