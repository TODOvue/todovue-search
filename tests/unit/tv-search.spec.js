import { mount } from "@vue/test-utils";
import useSearch from "../../src/composables/useSearch";
import TvSearch from "@/component/TvSearch.vue";
import { computed } from "vue";

describe("useSearch", () => {
  let results;
  let wrapper;
  beforeEach(() => {
    results = [
      { title: "Result 1" },
      { title: "Result 2" },
      { title: "Another result" },
    ];
    wrapper = mount({
      setup() {
        return useSearch(results);
      },
      template: `
        <div>
          <input ref="inputSearch" v-model="inputValue">
        </div>
      `,
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe("openedModal", () => {
    it("should set openedModal to true when openModal is called", () => {
      wrapper.vm.openModal();
      expect(wrapper.vm.openedModal).toBe(true);
    });

    it("should set openedModal to false when closeModal is called", () => {
      wrapper.vm.closeModal();
      expect(wrapper.vm.openedModal).toBe(false);
    });
  });

  describe("Search results", () => {
    it("should emit a 'search' event when search is called", () => {
      const searchValue = "query";
      wrapper.vm.inputValue = searchValue;
      wrapper.vm.search();
      expect(wrapper.emitted("search")[0][0]).toBe(searchValue);
    });

    it("should not trigger search if inputValue is empty", () => {
      wrapper.vm.inputValue = "";
      wrapper.vm.search();

      expect(wrapper.emitted("search")).toBeUndefined();
      expect(wrapper.inputValue).toBe(undefined);
    });
  });

  describe("changeModalOpened", () => {
    const createKeyEvent = (keyCode, ctrlKey = false, metaKey = false) => ({
      keyCode,
      ctrlKey,
      metaKey,
      preventDefault: jest.fn(),
    });

    it("should open the modal and focus the input if Ctrl + F' is pressed", () => {
      const event = createKeyEvent(70, true, false);
      wrapper.vm.changeModalOpened(event);

      expect(event.preventDefault).toHaveBeenCalledTimes(1);
    });

    it("should close the modal if the Esc key is pressed and the modal is open", () => {
      const event = createKeyEvent(27);
      wrapper.vm.openedModal = true;
      wrapper.vm.changeModalOpened(event);
      expect(wrapper.vm.openedModal).toBe(false);
    });

    it("should not do anything if other keys are pressed", () => {
      const event = createKeyEvent(65);
      wrapper.vm.changeModalOpened(event);

      expect(event.preventDefault).not.toHaveBeenCalled();
    });
  });

  describe("custom style", () => {
    it("should render custom style", () => {
      const wrapper = mount(TvSearch, {
        props: {
          customStyles: {
            bgBody: "#0A4539",
            bgInput: "#284780",
            bgButton: "#80286E",
            colorButton: "#D5B7B7",
          },
        },
      });

      const result = {
        bgBody: {
          backgroundColor: "rgba(10, 69, 57, 0.9)",
        },
        bgInput: {
          backgroundColor: "#284780",
          boxShadow: "0 0 15px 0 #284780",
        },
        customButton: {
          backgroundColor: "#80286E",
          color: "#D5B7B7",
        },
      };
      wrapper.vm.openModal();
      expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.vm.custom).toStrictEqual(result);
    });

    it("should return an rgba color if rgba is sent", () => {
      const wrapper = mount(TvSearch, {
        props: {
          customStyles: {
            bgBody: "rgba(10, 69, 57, 0.9)",
          },
        },
      });
      wrapper.vm.openModal();
      expect(wrapper.vm.custom.bgBody).toStrictEqual({
        backgroundColor: "rgba(rgba(10, 69, 57, 0.9), 0.9)",
      });
    });

    it("should return empty object if no custom style is sent", () => {
      const wrapper = mount(TvSearch);
      wrapper.vm.openModal();
      expect(wrapper.vm.customStyles).toStrictEqual({});
    });

    it("should return null if customStyles are not provided", () => {
      const wrapper = mount(TvSearch, {
        props: {
          customStyles: null,
        },
      });
      wrapper.vm.openModal();
      expect(wrapper.vm.customStyles).toStrictEqual(null);
    });

    it("empty string should be returned if the custom button is not sent", () => {
      const wrapper = mount(TvSearch, {
        props: {
          customStyles: {
            bgBody: "#0A4539",
            bgInput: "#284780",
          },
        },
      });
      wrapper.vm.openModal();
      expect(wrapper.vm.custom.bgButton).toStrictEqual(undefined);
      expect(wrapper.vm.custom.colorButton).toStrictEqual(undefined);
    });
  });

  describe("filterComposable", () => {
    it("must filter the results based on the input value", () => {
      const wrapper = mount(TvSearch, {
        props: {
          results: [{ title: "Result 1" }, { title: "Result 2" }],
        },
      });
      wrapper.vm.inputValue = "result";
      expect(wrapper.vm.filterResults).toEqual([
        { title: "Result 1" },
        { title: "Result 2" },
      ]);
    });
  });
});
