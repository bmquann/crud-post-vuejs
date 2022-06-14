<template>
  <div>
    <table border="1">
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>
        <th>User created</th>
        <th colspan="2">Actions</th>
      </tr>
      <slot name="renderPost"> </slot>
    </table>
  </div>
</template>
<script>
export default {}

</script>
<style scoped>
</style>