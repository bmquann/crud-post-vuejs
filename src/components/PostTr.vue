
<template>
  <tr>
    
    <td>{{ item.id }}</td>
    <td>{{ item.title }}</td>
    <td>{{ item.body }}</td>
    <td>{{ item.userId }}</td>
    <td>
      <a class="button touch edit">
        <font-awesome-icon icon="fa-solid fa-pen"
      /></a>
    </td>
<td>
      <button  @click="deletePost(item.id)"  class="button touch delete">
        <font-awesome-icon icon="fa-solid fa-trash-can" />
    </button>
</td>
    <!-- <button >click</button> -->
    <!-- <td>
      <button  class="button touch delete">
        <font-awesome-icon icon="fa-solid fa-trash-can" />
      </button>
    </td> -->
  </tr>
</template>

<script>

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deletePost(postId){
      this.$store.commit('DELETE_POST',postId);
      alert('Post deleted successfully')
    }

  },
};
</script>

<style>
</style>