import {postService} from '../_services';
import { router } from '../_helpers';

const state = {
    all: []
};

const actions = {
    getAllPosts({ commit }) {
        commit('getAllRequest');

        postService.getAllPosts()
            .then(
                posts => commit('getAllSuccess', posts),
                error => commit('getAllFailure', error)
            );
    },
    getTicketById({ commit } ){
        commit('getAllRequest' , router.currentRoute.params.id );

        postService.getTicketById(router.currentRoute.params.id)
            .then(
                posts => commit('getAllSuccess', posts),
                error => commit('getAllFailure', error)
            );
    },
    createTickets({ dispatch, commit }, ticket) {
        commit('createTicketsRequest', ticket);
        postService.createTickets(ticket)
            .then(
                ticket => {
                    commit('createTicketsSuccess', ticket);
                    router.push('/');
                    setTimeout(() => {
                        // display success message after route change completes
                        dispatch('alert/success', 'Create Tickets successful', { root: true });
                    })
                },
                error => {
                    commit('createTicketsFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    }
};

const mutations = {
    getAllRequest(state) {
        state.all = { loading: true };
    },
    getAllSuccess(state, posts) {
        state.all = { items: posts.data };
    },
    getAllFailure(state, error) {
        state.all = { error };
    },
    createTicketsRequest(state, ticket) {
        state.status = { registering: true };
    },
    createTicketsSuccess(state, ticket) {
        state.status = {};
    },
    createTicketsFailure(state, ticket) {
        state.status = {};
    }
};

export const posts = {
    namespaced: true,
    state,
    actions,
    mutations
};