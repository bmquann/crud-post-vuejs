<template>
  <div class="formUpdate">
    <h3>CREATE POST</h3>
    <PostInput
      type="text"
      id="title"
      :placeholder="newPost.title"
      v-model="newPost.title"
      >Title</PostInput
    >
    <PostInput
      type="text"
      id="body"
      :placeholder="newPost.body"
      v-model="newPost.body"
      >Body</PostInput
    >
    <PostInput
      type="text"
      id="userId"
      :placeholder="newPost.userId"
      v-model="newPost.userId"
      >UserID</PostInput
    >

    <!-- Button -->
    <div class="formUpdate__action">
      <a
        :class="{ disabled: isDisable }"
        @click="handleCreate"
        class="button new"
        >Create</a
      >
      <a @click="$router.go(-1)" class="button delete">Back </a>
    </div>
  </div>
</template>

<script>
import PostInput from "../components/PostInput.vue";
export default {
  components: {
    PostInput,
  },
  data() {
    return {
      newPost: {
        title: "",
        body: "",
        userId: "",
      },
    };
  },
  computed: {
    isDisable() {
      return !!this.newPost.title &&
        !!this.newPost.body &&
        !!this.newPost.userId
        ? false
        : true;
    },
  },
  methods: {
    async handleCreate() {
      await this.$store.dispatch("createPost", this.newPost);
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