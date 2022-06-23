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
            await API.get(`posts`)
                .then((res) => {
                    commit('SET_POSTS', res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        async deleteData({ commit }, postId) {
            await API.delete('posts', postId)
                .then(() => {
                    commit('DELETE_POST', postId)
                })
                .catch((err) => {
                    console.log(err)
                    alert("Can not delete this post!!")
                })
        },

        async updatePost({ commit }, post) {
            await API.put(`posts/${post.id}`, JSON.stringify(post))
                .then((res) => {
                    const newPost = res.data;
                    commit('UPDATE_POST', newPost)
                    alert("Update Post ID= " + newPost.id +" Successfully" )
                })
                .catch((err) => {
                     alert(err)
                })

        },

        async createPost({ commit }, post) {
            await API.post(`posts`, post)
                .then((res) => {
                    let newPost = res.data;
                    commit('CREATE_POST', newPost)
                    alert("Created Post ID= " + newPost.id +" Successfully" )
                })
                .catch((err) => {
                     alert(err)
                })

        }
    },
    getters: {
        selected: (state) => state.selected
    }
});

