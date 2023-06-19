<script setup>
import {useStore} from "vuex";
import {computed, ref} from "vue";

const store = useStore();
const newTitle = ref('')
const editTitle = ref('')
const isError = ref(false)
const tasks = computed(() => store.getters.getTasks);
const tasksCount = computed(() => store.getters.getTasksCount);
const filterValue = computed(() => store.getters.getFilterValue);
const addTask = () => {
  if (newTitle.value.trim() !== '') {
    store.dispatch('addTask', newTitle.value);
    newTitle.value = ''
    isError.value = false
  } else {
    isError.value = true
  }

};
const removeTask = (id) => {
  store.dispatch('removeTask', id);
};
const changeTaskStatus = (e, id) => {
  store.dispatch('changeTaskStatus', {id, status: e.currentTarget.checked});
};
const changeTaskTitle = (id, title) => {
  editTitle.value = title
  if (editTitle.value.trim() !== '') {
    store.dispatch('changeTaskTitle', {id, title: editTitle.value})
    store.dispatch('changeTaskEditMode', {id, isEditModeValue: false})
    isError.value = false
  } else {
    isError.value = true

  }
};
const changeTasksFilter = (filter) => {
  store.dispatch('changeTasksFilter', filter);
}
const removeCompletedTasks = () => {
  store.dispatch('removeCompletedTasks');
}
const startEditing = (id) => {
  store.dispatch('changeTaskEditMode', {id, isEditModeValue: true});
}
const endEditing = (id) => {
  store.dispatch('changeTaskEditMode', {id, isEditModeValue: false});
}
</script>

<template>
  <div class="container my-3">
    <div class="input-group mb-3">
      <input
          type="text"
          class="form-control"
          placeholder="Add task"
          v-model="newTitle"
          @keyup.enter="addTask"
          required
      />
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" @click="addTask">+</button>
      </div>
    </div>
    <div class="card text-center">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a
                class="nav-link"
                href="#"
                @click="() => changeTasksFilter('all')"
                :class="{ 'active': filterValue === 'all' }"
            >
              All</a>
          </li>
          <li class="nav-item">
            <a
                class="nav-link"
                href="#"
                @click="() => changeTasksFilter('active')"
                :class="{ 'active': filterValue === 'active' }"
            >
              Active</a>
          </li>
          <li class="nav-item">
            <a
                class="nav-link"
                href="#"
                @click="() => changeTasksFilter('completed')"
                :class="{ 'active': filterValue === 'completed' }"
            >
              Completed</a>
          </li>
        </ul>
      </div>
      <ul class="list-group list-group-flush text-left">
        <li class="list-group-item" v-for="task in tasks">
          <div class="d-flex justify-content-between w-100">
            <div class="form-check mt-2 mb-2">
              <input
                  type="checkbox"
                  class="form-check-input"
                  :id="task.id"
                  :checked="task.isDone"
                  @change="(e) => changeTaskStatus(e, task.id)"
              />

              <label
                  class="form-check-label"
                  for="item.id"
                  :class="{ 'completed': task.isDone }"
                  v-if="!task.isEditMode"
              >
                {{ task.title }}
              </label>
              <input
                  type="text"
                  class="form-control"
                  v-else
                  v-model="task.title"
                  @keyup.enter="changeTaskTitle(task.id, task.title)"
                  @keyup.esc="endEditing(task.id)"
                  autofocus
              >
            </div>
            <div class="d-flex gap-2 h-25">
              <button
                  type="button"
                  class="btn btn-primary h-100"
                  aria-label="Close"
                  @click="() => startEditing(task.id)"
                  v-if="!task.isEditMode"
              >
                <span aria-hidden="true">Edit</span>
              </button>
              <button
                  type="button"
                  class="btn btn-primary h-100"
                  aria-label="Close"
                  v-else
                  @click="() => changeTaskTitle(task.id, task.title)"
              >
                <span aria-hidden="true">Save</span>
              </button>
              <button
                  type="button"
                  class="btn btn-primary  h-100"
                  aria-label="Close"
                  @click="() => removeTask(task.id)">

                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </li>
      </ul>
      <div class="card-footer d-flex justify-content-between">
        <span>{{ tasksCount }} times left</span>
        <a
            class="text-decoration-none"
            href="#"
            @click="removeCompletedTasks"
        >
          Clear completed</a>
      </div>
    </div>
  </div>
</template>
<style>
.card-header {
  background-color: #e3f2fd
}

.card-footer {
  background-color: #e3f2fd
}

.completed {
  text-decoration: line-through;
  color: lightgrey;
}
</style>