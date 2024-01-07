import { reactive } from "vue/dist/vue.esm-browser.prod";

export const store = reactive({
  selectedList: [],
});

export const detailStore = reactive({
  index: 0,
  content: null,
});
