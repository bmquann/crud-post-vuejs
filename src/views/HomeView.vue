<template>
  <div>
    <post-table :header="{
      posts,
    }">
      <PostTr slot="renderPost" v-for="(item, index) in displayedPosts" :key="index" :item="item"></PostTr>
    </post-table>
     <nav >
      <ul class="pagination">
        <li class="page-item">
          <button type="button" class="page-link" v-if="page != 1" @click="page--"> Previous </button>
        </li>
        <li class="page-item">
          <button type="button" class="page-link" v-for="(pageNumber,index) in pages.slice(page-1, page+5)" :key="index" @click="page = pageNumber"> {{pageNumber}} </button>
        </li>
        <li class="page-item">
          <button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Next </button>
        </li>
      </ul>
    </nav>  
  </div>
</template>
<script>
import PostTable from "../components/PostTable.vue";
import PostTr from "../components/PostTr.vue";
import { mapState } from "vuex";
export default {
  components: { PostTable, PostTr },
  data() {
    return {
      page: 1,
      perPage: 9,
      pages: [],
    };
  },
  computed: {
    ...mapState({
      table: state => state.table,
      posts: state => state.posts
    }),
     displayedPosts () {
      return this.paginate(this.posts);
    }
  },
   watch: {
    posts () {
      this.setPages();
    }
  },
  created() {
    this.$store.dispatch("getData");
  },
  methods: {

    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return posts.slice(from, to);
    }
  },
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

table {
  margin-bottom: 5px;
}

.page-item{
  display: flex
}

.pagination{
  justify-content: end;
}
</style>