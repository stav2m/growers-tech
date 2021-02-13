import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { ToDoItem } from "../type-defs/type-defs";

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        todoList: new Array<ToDoItem>(),
    },
    mutations: {
        setItemRemoved(state, item: ToDoItem) {
            const index: number = state.todoList.findIndex(x => x.id == item.id);
            if (index > -1) {
                state.todoList.splice(index, 1);
            }
        },
        setItemAdded(state, item: ToDoItem) {
            state.todoList.push(item);
        },
        checkItem(state, item: ToDoItem) {
            const index: number = state.todoList.findIndex(x => x.id == item.id);
            if (index > -1) {
                state.todoList[index].checked = !state.todoList[index].checked;
            }
        }
    },
    actions: {
        removeItem(state, item: ToDoItem) {
            state.commit("setItemRemoved", item);
        },
        addItem(state, item: ToDoItem) {
            state.commit("setItemAdded", item);
        },
        toggleCheckItem(state, item: ToDoItem) {
            state.commit("checkItem", item);
        }
    },
    plugins: [vuexLocal.plugin]
})
