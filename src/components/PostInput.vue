<template>
  <label :for="id"
    ><slot></slot>
    <input
      :type="type"
      :id="id"
      :name="id"
      v-model="inputValue"
      :placeholder="placeholder"
      @blur="handleChange"
      :class="{ error: isError }"
    />
    <p v-if="isError" class="message">{{ errorMessage }}</p>
  </label>
</template>

<script>
export default {
  data() {
    return {
      inputValue: this.value,
      errorMessage: "",
    };
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    value: {
      type: null,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  computed: {
    isError() {
      return this.errorMessage?.length !== 0 ? true : false;
    },
  },
  watch: {
    value(newVal) {
      this.inputValue = newVal;
    },
  },
  methods: {
    handleChange: function () {
      this.handleValidate(this.inputValue);
      this.$emit("input", this.inputValue);
    },
    handleValidate(value) {
      if (value.length < 1) {
        this.errorMessage = "This field is required!";
        return;
      }
      this.errorMessage = "";
    },
  },
};
</script>

<style scoped>
label {
  color: #000;
  font-size: 16px;
  display: block;
  margin-bottom: 6px;
}
input {
  color: #586068;
  font-size: 16px;
  width: 100%;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: 3px solid transparent;
  transition: all 0.2s ease;
}
input:focus {
  outline: 3px solid #c2d9fb;
  box-shadow: unset;
  border: 1px solid transparent;
}
.error {
  box-shadow: 0 0 4px #f4b6c1;
  border: 1px solid #aa4651;
}
.error:focus {
  outline: 3px solid #f4b6c1;
}
.message {
  color: #aa4651;
  font-size: 12px;
  margin-top: 8px;
}
</style>