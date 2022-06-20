<template>
  <div>
    <table border="1">
      <tr>
        <th  v-for="(item) in table.th" :key="item.name" :colspan="item.colspan" >{{item.name}}</th>
      </tr>
      <slot name="renderPost"></slot> 

    </table>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      table: state => state.table
      })
  }
}

</script>
<style scoped>
</style>