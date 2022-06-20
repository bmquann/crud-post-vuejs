
<template>
  <tr>
    <td v-for="(data, index) in data" :key="index">{{ item[data] }}</td>
    <td>

      <router-link :to="{ name: 'update', params: { id: item.id } }"
        ><a class="button touch edit">
          <font-awesome-icon icon="fa-solid fa-pen" /> </a
      ></router-link>
    </td>
    <td>
      <button @click="deletePost(item.id)" class="button touch delete">
        <font-awesome-icon icon="fa-solid fa-trash-can" />
      </button>
    </td>
  </tr>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState({
      data: (state) => state.data,
    }),
  },
  methods: {
    deletePost(postId) {
      this.$store.commit("DELETE_POST", postId);
      alert("Post deleted successfully");
    },
    log(msg) {
      console.log(msg);
    },
  },
};
</script>

<style>
</style>