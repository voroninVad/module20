import { createStore } from "vuex";

const store = createStore({
  state: {
    tasks: [],
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    UPDATE_TASK(state, { id, task }) {
      state.tasks[id] = task;
    },
    DELETE_TASK(state, index) {
      state.tasks.splice(index, 1);
    },
  },
  actions: {
    addTask({ commit }, tasks) {
      commit("ADD_TASK", tasks );
    },
    updateTask({ commit }, { id, task }) {
      commit("UPDATE_TASK", { id, task });
    },
    deleteTask({ commit }, index) {
      commit("DELETE_TASK", index);
    },
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
  },
});

export default store;
