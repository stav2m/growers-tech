<template>
  <div class="home">
    <b-container class="px-md-0">
      <Header />
      <to-do-input @addItem="setAddItem" />
      <to-do-list />
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ToDoInput from "@/components/ToDoInput.vue";
import ToDoList from "@/components/ToDoList.vue";

export default {
  name: "AppRoot",
  components: {
    Header,
    ToDoInput,
    ToDoList,
  },
  mounted() {},
  computed: {
    todoList() {
      return this.$store.state.todoList;
    },
  },
  methods: {
    setAddItem(item) {
      this.$store.dispatch("addItem", {
        name: item,
        id: this.todoList.length,
        checked: false,
      });
    },
  },
};
</script>
 
<style scoped lang="scss">
</style>