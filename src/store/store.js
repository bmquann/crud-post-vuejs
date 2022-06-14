import { API } from './api'

import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: []
    },
    mutations: {
        SET_POSTS(state, data) {
            state.posts = data
        },
    },
    actions: {
        getData({ commit }) {
            API.get(`posts`)
                .then(response => {
                    commit('SET_POSTS', response.data)
          
                })
        },
    },
    getters: {
        selected: (state) => state.selected
    }
});

