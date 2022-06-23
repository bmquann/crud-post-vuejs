<template>
  <div>
    <table border="1">
      <tr>
        <th  v-for="(item) in table" :key="item.id" :colspan="item.colspan" >{{item.display}}</th>
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