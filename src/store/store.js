import { API } from './api'

import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        table: {
            th: [
                {
                    name: 'ID',
                    colspan: 1,
                    
                },
                {
                    name: 'Title',
                    colspan: 1
                },
                {
                    name: 'Body',
                    colspan: 1
                },
                {
                    name: 'User Created',
                    colspan: 1
                },
                {
                    name: 'Actions',
                    colspan: 2
                },
            ]
        },
        data: ['id','title', 'body','userId']
    },
    mutations: {
        SET_POSTS(state, data) {
            state.posts = data
        },
        CREATE_POST(state, post) {
            state.post = [...state.posts, post]
        },
        DELETE_POST(state, postId) {
            state.posts = state.posts.filter(post => post.id != postId);
        },
        UPDATE_POST(state, post) {
            post = state.posts.find(p => p.id !== post.id)
        }
    },
    actions: {
        async getData({ commit }) {
            let response = await API.get(`posts`)
            commit('SET_POSTS', response.data)
        },

        async deleteData({ commit }, postId) {
            let response = await API.delete('posts', postId);
            if (response.status == 200 || response.status == 204) {
                commit('DELETE_POST', postId)
            }
            else {
                alert("Can not delete this post!!")
            }
        },

        async updatePost({ commit }, post) {
            let response = await API.put(`posts/${post.id}`, JSON.stringify(post));
            const newPost = response.data;
            console.log(response)
            commit('UPDATE_POST', newPost)
            return newPost
        },

        async createPost({ commit }, post) {
            let response = await API.post(`posts`, post);
            let newPost = response.data;
            console.log(newPost)
            commit('CREATE_POST', newPost)
            return newPost
        }
    },
    getters: {
        selected: (state) => state.selected
    }
});

