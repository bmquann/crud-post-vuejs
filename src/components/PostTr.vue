
<template>
  <tr>
    <td>{{ item.id }}</td>
    <td>{{ item.title }}</td>
    <td>{{ item.body }}</td>
    <td>{{ item.userId }}</td>
    <td><a class="button touch edit"> <font-awesome-icon icon="fa-solid fa-pen" /></a></td>
    <td><a class="button touch delete"><font-awesome-icon icon="fa-solid fa-trash-can" /></a></td>
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
  
};
</script>

<style>
</style>