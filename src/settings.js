const state = {
    theme: 'light',
};

const mutations = {
    SET_THEME(state, theme) {
        state.theme = theme;
    }
};

const actions = {
    setTheme({ commit }, theme) {
        commit('SET_THEME', theme);
    }
};

const getters = {
    currentTheme: (state) => state.theme,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
