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
        DELETE_POST(state, postId) {
            let newPost = state.posts.filter(post => post.id != postId);
            state.posts = newPost
        }
    },
    actions: {
        async getData({ commit }) {
            API.get(`posts`)
                .then(response => {
                    commit('SET_POSTS', response.data)

                })
        },
        async deleteData({ commit }, postId) {
            //delete in server 
            let response =await API.delete('posts',postId);
            if (response.status == 200 || response.status == 204) {
                commit('DELETE_POST',postId)
            }
            //delete in state

        }
    },
    getters: {
        selected: (state) => state.selected
    }
});

