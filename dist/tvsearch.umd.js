(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tvsearch"] = factory(require("vue"));
	else
		root["tvsearch"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 880:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/******/(function () {
  // webpackBootstrap
  /******/
  "use strict";

  /******/
  var __webpack_modules__ = {
    /***/89: /***/function (__unused_webpack_module, exports) {
      var __webpack_unused_export__;
      __webpack_unused_export__ = {
        value: true
      };
      // runtime helper for setting properties on components
      // in a tree-shakable way
      exports.Z = (sfc, props) => {
        const target = sfc.__vccOpts || sfc;
        for (const [key, val] of props) {
          target[key] = val;
        }
        return target;
      };

      /***/
    }

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/
  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/
  function __nested_webpack_require_820__(moduleId) {
    /******/ // Check if module is in cache
    /******/var cachedModule = __webpack_module_cache__[moduleId];
    /******/
    if (cachedModule !== undefined) {
      /******/return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_820__);
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/
  !function () {
    /******/ // define getter functions for harmony exports
    /******/__nested_webpack_require_820__.d = function (exports, definition) {
      /******/for (var key in definition) {
        /******/if (__nested_webpack_require_820__.o(definition, key) && !__nested_webpack_require_820__.o(exports, key)) {
          /******/Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  !function () {
    /******/__nested_webpack_require_820__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  }();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/
  !function () {
    /******/__nested_webpack_require_820__.p = "";
    /******/
  }();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  !function () {
    // EXPORTS
    __nested_webpack_require_820__.d(__webpack_exports__, {
      "default": function () {
        return (/* binding */entry_lib
        );
      }
    });
    ; // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
    /* eslint-disable no-var */
    // This file is imported into lib/wc client bundles.

    if (typeof window !== 'undefined') {
      var currentScript = window.document.currentScript;
      if (false) { var getCurrentScript; }
      var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
      if (src) {
        __nested_webpack_require_820__.p = src[1]; // eslint-disable-line
      }
    }

    // Indicate to webpack that this file can be concatenated
    /* harmony default export */
    var setPublicPath = null;
    ; // CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
    var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = __webpack_require__(203);
    ; // CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvButton.vue?vue&type=template&id=35c5ee6a

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("button", {
        class: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["tv-btn", {
          'tv-btn-rounded': $props.isRounded,
          'tv-btn-full': $props.isFull,
          'tv-btn-outlined': $props.isOutlined,
          'tv-btn-small': $props.isSmall,
          'tv-btn-large': $props.isLarge,
          'tv-btn-success': $props.isSuccess,
          'tv-btn-info': $props.isInfo,
          'tv-btn-warning': $props.isWarning,
          'tv-btn-error': $props.isError,
          'tv-btn-disabled': $props.isDisabled,
          'tv-btn-circle': $props.isCircle,
          'tv-btn-text': $props.isText
        }]),
        onClick: _cache[0] || (_cache[0] = (...args) => $setup.handleClick && $setup.handleClick(...args))
      }, [$props.icon ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("i", {
        key: 0,
        class: (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeClass)(["tv-btn-icon", `tv-icon-${$props.icon} tv-icon-position-${$props.iconPosition}`])
      }, null, 2)) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), !$props.buttonText ? (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "default", {
        key: 1
      }) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true), $props.buttonText ? ((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, {
        key: 2
      }, [(0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createTextVNode)((0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($props.buttonText), 1)], 64)) : (0, external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createCommentVNode)("", true)], 2);
    }
    ; // CONCATENATED MODULE: ./src/component/TvButton.vue?vue&type=template&id=35c5ee6a

    ; // CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvButton.vue?vue&type=script&lang=js
    /* harmony default export */
    var TvButtonvue_type_script_lang_js = {
      name: "TvButton",
      props: {
        isRounded: {
          type: Boolean,
          default: false
        },
        isFull: {
          type: Boolean,
          default: false
        },
        isOutlined: {
          type: Boolean,
          default: false
        },
        isSmall: {
          type: Boolean,
          default: false
        },
        isLarge: {
          type: Boolean,
          default: false
        },
        isSuccess: {
          type: Boolean,
          default: false
        },
        icon: {
          type: String,
          default: ""
        },
        isInfo: {
          type: Boolean,
          default: false
        },
        isWarning: {
          type: Boolean,
          default: false
        },
        isError: {
          type: Boolean,
          default: false
        },
        isDisabled: {
          type: Boolean,
          default: false
        },
        isCircle: {
          type: Boolean,
          default: false
        },
        isText: {
          type: Boolean,
          default: false
        },
        buttonText: {
          type: String,
          default: ""
        },
        iconPosition: {
          type: String,
          default: "right"
        }
      },
      setup(_, {
        emit
      }) {
        const handleClick = () => {
          emit("click", {});
        };
        return {
          handleClick
        };
      },
      emits: ["click"]
    };
    ; // CONCATENATED MODULE: ./src/component/TvButton.vue?vue&type=script&lang=js

    // EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
    var exportHelper = __nested_webpack_require_820__(89);
    ; // CONCATENATED MODULE: ./src/component/TvButton.vue

    ;
    const __exports__ = /*#__PURE__*/(0, exportHelper /* default */.Z)(TvButtonvue_type_script_lang_js, [['render', render]]);

    /* harmony default export */
    var TvButton = __exports__;
    ; // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

    /* harmony default export */
    var entry_lib = TvButton;
  }();
  module.exports = __webpack_exports__["default"];
  /******/
})();

/***/ }),

/***/ 620:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 203:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvSearch.vue?vue&type=template&id=ac044fe2

const _hoisted_1 = {
  class: "tv-search"
};
const _hoisted_2 = {
  class: "tv-search-modal-content"
};
const _hoisted_3 = {
  class: "tv-search-modal-content-input"
};
const _hoisted_4 = ["placeholder"];
const _hoisted_5 = {
  key: 0,
  class: "tv-search-results"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tv_button = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("tv-button");
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("i", {
    class: "tv-search-icon tv-icon tv-cursor-pointer",
    onClick: _cache[0] || (_cache[0] = (...args) => $setup.openModal && $setup.openModal(...args))
  })]), $setup.openedModal ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    key: 0,
    class: "tv-search-modal",
    onClick: _cache[4] || (_cache[4] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withModifiers)((...args) => $setup.closeModal && $setup.closeModal(...args), ["self"]))
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("input", {
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.inputValue = $event),
    onKeyup: _cache[2] || (_cache[2] = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withKeys)((...args) => $setup.search && $setup.search(...args), ["enter"])),
    placeholder: $props.placeholder,
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["tv-search-input", {
      'tv-radius-none-bl': $setup.filterResults.length >= 1
    }]),
    ref: "inputSearch"
  }, null, 42, _hoisted_4), [[external_commonjs_vue_commonjs2_vue_root_Vue_.vModelText, $setup.inputValue]]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createVNode)(_component_tv_button, {
    isRounded: "",
    icon: "search-light",
    onClick: $setup.search,
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)({
      'tv-radius-none-br': $setup.filterResults.length >= 1
    })
  }, {
    default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createTextVNode)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.titleButton), 1)]),
    _: 1
  }, 8, ["onClick", "class"])]), $setup.filterResults.length >= 1 ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_5, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)($setup.filterResults, result => {
    return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("p", {
      key: result.id,
      class: "tv-search-results-title tv-cursor-pointer",
      onClick: _cache[3] || (_cache[3] = (...args) => $setup.search && $setup.search(...args))
    }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(result.title), 1);
  }), 128))])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)])])) : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)], 64);
}
;// CONCATENATED MODULE: ./src/component/TvSearch.vue?vue&type=template&id=ac044fe2

// EXTERNAL MODULE: ./node_modules/todovue-button/dist/tvbutton.common.js
var tvbutton_common = __webpack_require__(880);
var tvbutton_common_default = /*#__PURE__*/__webpack_require__.n(tvbutton_common);
;// CONCATENATED MODULE: ./src/composables/useSearch.js

const useSearch = results => {
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onMounted)(() => {
    document.addEventListener("keydown", changeModalOpened);
  });
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_.onBeforeUnmount)(() => {
    document.removeEventListener("keydown", changeModalOpened);
  });
  const inputValue = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)("");
  const theme = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)("dark");
  const openedModal = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(false);
  const inputSearch = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)();
  const instance = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.getCurrentInstance)();
  const openModal = () => {
    _manageModal(true);
    _focusInput();
  };
  const search = () => {
    if (!inputValue.value) return;
    _manageModal(false, inputValue.value);
    instance.emit("search", inputValue.value);
    inputValue.value = "";
  };
  const closeModal = () => {
    _manageModal(false);
  };
  const _manageModal = (manageModal, search = null) => {
    openedModal.value = manageModal;
    if (inputValue.value && search) {
      inputValue.value = search;
    }
  };
  const _focusInput = () => {
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.nextTick)(() => {
      inputSearch.value.select();
    });
  };
  const changeModalOpened = event => {
    if ((event.ctrlKey || event.metaKey) && event.keyCode === 70) {
      event.preventDefault();
      _manageModal(true);
      _focusInput();
    }
    if (event.keyCode === 27 && openedModal.value) {
      _manageModal(false);
    }
  };
  const filterResults = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.computed)(() => inputValue.value.length >= 1 ? results.filter(result => {
    return result.title.toLowerCase().includes(inputValue.value.toLowerCase());
  }) : []);
  return {
    inputValue,
    inputSearch,
    openedModal,
    theme,
    changeModalOpened,
    closeModal,
    openModal,
    search,
    filterResults
  };
};
/* harmony default export */ var composables_useSearch = (useSearch);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/component/TvSearch.vue?vue&type=script&lang=js


/* harmony default export */ var TvSearchvue_type_script_lang_js = ({
  name: "SearchBox",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    titleButton: {
      type: String,
      default: ""
    },
    results: {
      type: Array,
      default: () => []
    }
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
      filterResults
    } = composables_useSearch(props.results);
    return {
      inputValue,
      inputSearch,
      openedModal,
      theme,
      changeModalOpened,
      closeModal,
      openModal,
      search,
      filterResults
    };
  },
  components: {
    TvButton: (tvbutton_common_default())
  },
  emits: ["search"]
});
;// CONCATENATED MODULE: ./src/component/TvSearch.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(620);
;// CONCATENATED MODULE: ./src/component/TvSearch.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(TvSearchvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var TvSearch = (__exports__);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (TvSearch);


}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=tvsearch.umd.js.map