import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: [
      {
        name: "About",
        link: "/",
      },
      {
        name: "Characters",
        link: "/Characters",
      },
      {
        name: "Episodes",
        link: "/Episodes",
      }
    ],
    search: "",
    seasons: [
      {
        id: 1,
        title: "Season 1",
      },
      {
        id: 2,
        title: "Season 2",
      },
      {
        id: 3,
        title: "Season 3",
      },
      {
        id: 4,
        title: "Season 4",
      },
      {
        id: 5,
        title: "Season 5",
      }
    ],
    episodes: []
  },
  actions: {
    
  },
  modules: {
    
  }
});
