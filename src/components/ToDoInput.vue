<template>
  <b-form @submit="onSubmit">
    <div class="top-section d-flex justify-content-between fnt-Inter flex-wrap flex-md-nowrap">
      <div class="inputWrapper">
        <b-form-input
          v-model="todoValue"
          placeholder="Add todo’s..."
        ></b-form-input>
      </div>
      <div class="btn-wrapper mt-md-0">
        <b-button
          class="ml-auto"
          variant="success"
          :disabled="!todoValue"
          type="submit"
          >Add</b-button
        >
      </div>
    </div>
  </b-form>
</template>

<script>
export default {
  name: "ToDoInput",
  data() {
    return {
      todoValue: "",
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$emit("addItem", this.todoValue);
      this.todoValue = "";
    },
  },
};
</script>
 
<style scoped>
</style>
