import { defineStore } from "pinia";

const useLayoutStore = defineStore("Layout", {
  state: () => {
    return {
      expand: true,
      fresh: true,
    };
  },
  actions: {
    Expand_Menu() {
      this.expand = !this.expand;
    },
  },
  getters: {},
});

export default useLayoutStore;
