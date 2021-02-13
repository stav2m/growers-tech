<template>
  <div class="list-section">
    <h4
      v-if="todoList.length == 0"
      class="fnt-Fredericka text-center text-md-left list-title"
    >
      No Todo’s to show...
    </h4>
    <to-do-panel
      v-for="item in todoList"
      :key="item.id"
      :item="item"
      class="fnt-Inter"
      @checkItem="checkItem"
      @setDeleteItem="setDeleteItem"
    />
  </div>
</template>

<script>
import ToDoPanel from "@/components/ToDoPanel.vue";

export default {
  name: "ToDoList",
  components: {
    ToDoPanel,
  },
  computed: {
    todoList() {
      return this.$store.state.todoList;
    },
  },
  methods: {
    checkItem(item) {
      this.$store.dispatch("toggleCheckItem", item);
    },
    setDeleteItem(item) {
      this.$store.dispatch("removeItem", item);
    },
  },
};
</script>
 
<style scoped>
</style>
