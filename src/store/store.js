import { API } from './api'

import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        table: [
            {
                id: 1,
                display: 'ID',
                name: 'id',
                colspan: 1,

            },
            {
                id: 2,
                display: 'Title',
                name: 'title',
                colspan: 1,
            },
            {
                id: 3,
                display: 'Body',
                name: 'body',
                colspan: 1
            },
            {
                id: 4,
                display: 'User Created',
                name: 'userId',
                colspan: 1
            },
            {
                id: 5,
                display: 'Actions',
                colspan: 2
            },
        ],
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
            try {
                const res = await API.get(`posts`)
                commit('SET_POSTS', res.data)
            }
            catch {
                console.log("Can not get data")
            }
        },

        async deleteData({ commit }, postId) {
            try {
                const res = await API.delete('posts', postId)
                commit('DELETE_POST', res.data)
            }
            catch {
                alert("Can not delete this post!!")
            }
        },

        async updatePost({ commit }, post) {
            try {
                const res = await API.put(`posts/${post.id}`, JSON.stringify(post))
                commit('UPDATE_POST', res.data)
                alert("Update Post ID= " + res.data.id + " Successfully")
            }
            catch {
                console.log("Can not update this post!!")
            }
        },

        async createPost({ commit }, post) {
            try {
                const res = await API.post(`posts`, post)
                commit('CREATE_POST', res.data)
                alert("Created Post ID= " + res.data.id + " Successfully")
            }
            catch {
                alert("Can not create this post!!")
            }
        }
    },
    getters: {
        selected: (state) => state.selected
    }
});

