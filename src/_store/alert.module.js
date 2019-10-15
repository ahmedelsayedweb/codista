const state = {
    type: null,
    message: null
};

const actions = {
    success({ commit }, message) {
        commit('success', message);
    },
    error({ commit }, data ) {
        commit('error', data);
    },
    errorsEmail({ commit }, data ) {
        commit('errorsEmail', data);
    },
    clear({ commit }, message) {
        commit('success', message);
    }
};

const mutations = {
    success(state, message) {
        state.type = 'alert-success';
        state.message = message;
    },
    error(state, data ) {
        state.type = 'alert-danger';
        state.message = data;
    },
    errorsEmail(state, data ) {
        state.type = 'alert-danger';
        state.message = data;
    },
    clear(state) {
        state.type = null;
        state.message = null;
    }
};

export const alert = {
    namespaced: true,
    state,
    actions,
    mutations
};
