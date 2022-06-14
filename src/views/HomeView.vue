<template>
  <div>
    <!-- <div class="card-body">
            <div v-for="item in pageOfItems" :key="item.id">{{item}}</div>
        </div> -->
    <post-table
      :header="{
        posts,
      }"
    >
      <PostTr
        slot="renderPost"
        v-for="(item, index) in pageOfItems"
        :key="index"
        :item="item"
      ></PostTr
    ></post-table>
    <jw-pagination :pageSize="10" :items="posts" @changePage="onChangePage"></jw-pagination>
  </div>
</template>
<script>
import PostTable from "../components/PostTable.vue";
import PostTr from "../components/PostTr.vue";
export default {
  components: { PostTable, PostTr},
  data() {
return{
  pageOfItems: []
}
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  created() {
    this.$store.dispatch("getData");
  },
  methods: {
        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        }
    }
};
</script>
<style>
table,
th,
td {
  border: 1px solid black !important;
  border-collapse: collapse;
}
th,
td {
  padding: 10px;
}
table{
  margin-bottom: 5px;
}
</style>