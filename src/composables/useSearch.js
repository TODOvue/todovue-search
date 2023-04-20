import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  getCurrentInstance,
  computed,
} from "vue";

const useSearch = (results) => {
  onMounted(() => {
    document.addEventListener("keydown", changeModalOpened);
    console.log(results);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("keydown", changeModalOpened);
  });

  const inputValue = ref("");
  const theme = ref("dark");
  const openedModal = ref(false);
  const inputSearch = ref();

  const instance = getCurrentInstance();

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
      ? results.filter((result) => {
          return result.title
            .toLowerCase()
            .includes(inputValue.value.toLowerCase());
        })
      : []
  );

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
};

export default useSearch;
