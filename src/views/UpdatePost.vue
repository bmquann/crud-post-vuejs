<template>
  <div class="formUpdate">
    <h3>UPDATE POST</h3>
    <PostInput
      type="text"
      id="title"
      :placeholder="postUpdate.title"
      v-model="postUpdate.title"
      >Title</PostInput
    >
    <PostInput
      type="text"
      id="body"
      :placeholder="postUpdate.body"
      v-model="postUpdate.body"
      >Body</PostInput
    >
    <PostInput
      type="text"
      id="userId"
      :placeholder="String(postUpdate.userId)"
      :value="String(postUpdate.userId)"
      v-model="postUpdate.userId"
      >UserID</PostInput
    >
    <!-- Button -->
    <div class="formUpdate__action">
      <a
        :class="{ disabled: isDisable }"
        @click="handleUpdate"
        class="button edit"
        >Update</a
      >
      <a @click="$router.go(-1)" class="button delete">Back </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PostInput from "../components/PostInput.vue";
export default {
  components: {
    PostInput,
  },
  data() {
    return {
      ...mapState({
        posts: (state) => state.posts,
      }),
      postUpdate: this.$store.state.posts.filter(
        (p) => p.id === this.$route.params.id
      )[0],
    };
  },
  computed: {
    isDisable() {
      return !!this.postUpdate.title &&
        !!this.postUpdate.body &&
        !!this.postUpdate.userId
        ? false
        : true;
    },
  },
  methods: {
    async handleUpdate() {
      let newPost = await this.$store.dispatch("updatePost", this.postUpdate);
            alert("Update Completed Post ID = "+ newPost.id + ", Title = " + newPost.title)
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped >
.formUpdate {
  width: 35%;
  margin: 0 auto;
  text-align: left;
}
.formUpdate h3 {
  text-align: center;
}
.formUpdate__action a {
  text-decoration: none;
  padding: 5px;
  width: 60px;
  margin-right: 10px;
  text-align: center;
  cursor: pointer;
}
.disabled {
  pointer-events: none;
  background: gray;
}
</style>