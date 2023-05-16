import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  getCurrentInstance,
  computed,
} from "vue";

const useSearch = (props) => {
  onMounted(() => {
    document.addEventListener("keydown", changeModalOpened);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("keydown", changeModalOpened);
  });

  const inputValue = ref("");
  const openedModal = ref(false);
  const inputSearch = ref();

  const _vm = getCurrentInstance();

  const openModal = () => {
    _manageModal(true);
    _focusInput();
  };

  const search = () => {
    if (!inputValue.value) return;
    _manageModal(false, inputValue.value);
    _vm.emit("search", inputValue.value);
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
    nextTick(() => {
      inputSearch.value.select();
    });
  };

  const changeModalOpened = (event) => {
    if ((event.ctrlKey || event.metaKey) && event.keyCode === 70) {
      event.preventDefault();
      _manageModal(true);
      _focusInput();
    }
    if (event.keyCode === 27 && openedModal.value) {
      _manageModal(false);
    }
  };

  const filterResults = computed(() =>
    inputValue.value.length >= 1
      ? props.results.filter((result) => {
          return result.title
            .toLowerCase()
            .includes(inputValue.value.toLowerCase());
        })
      : []
  );

  const _getCustomStyleBody = (customSearch, bgKey) => {
    if (!customSearch[bgKey]) return null;
    return {
      backgroundColor: `rgba(${_convertHexToRgb(customSearch[bgKey])}, 0.9)`,
    };
  };

  const _getCustomStyleInput = (customSearch, bgKey) => {
    if (!customSearch[bgKey]) return null;
    return {
      backgroundColor: customSearch[bgKey],
      boxShadow: `0 0 15px 0 ${customSearch[bgKey]}`,
    };
  };

  const _getCustomStyleButton = (customSearch, bgKey, colorKey) => {
    if (!customSearch[bgKey] && !customSearch[colorKey]) return null;
    return {
      backgroundColor: customSearch[bgKey],
      color: customSearch[colorKey],
    };
  };

  const _convertHexToRgb = (hex) => {
    if (hex[0] === "#") {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r}, ${g}, ${b}`;
    }
    return hex;
  };

  const custom = computed(() => {
    const { customStyles } = props;
    if (!customStyles) return null;
    return {
      bgBody: _getCustomStyleBody(customStyles, "bgBody"),
      bgInput: _getCustomStyleInput(customStyles, "bgInput"),
      customButton: _getCustomStyleButton(
        customStyles,
        "bgButton",
        "colorButton"
      ),
    };
  });

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
};

export default useSearch;
