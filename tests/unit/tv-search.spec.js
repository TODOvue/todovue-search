import { mount } from "@vue/test-utils";
import useSearch from "../../src/composables/useSearch";

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

  it("should set openedModal to true when openModal is called", () => {
    wrapper.vm.openModal();
    expect(wrapper.vm.openedModal).toBe(true);
  });

  it("should set openedModal to false when closeModal is called", () => {
    wrapper.vm.closeModal();
    expect(wrapper.vm.openedModal).toBe(false);
  });

  it("should emit a 'search' event when search is called", () => {
    const searchValue = "query";
    wrapper.vm.inputValue = searchValue;
    wrapper.vm.search();
    expect(wrapper.emitted("search")[0][0]).toBe(searchValue);
  });

  it("should filter the results when inputValue changes", async () => {
    const input = wrapper.find("input");
    const searchValue = "result";
    input.setValue(searchValue);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.filterResults).toEqual([
      { title: "Result 1" },
      { title: "Result 2" },
      { title: "Another result" },
    ]);
  });
});
