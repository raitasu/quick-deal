<script setup>
</script>

<template>
  <div class="container my-3 ">
    <h1 class="text-center mb-3">Task Manager</h1>
    <p>Task Manager is a simple web application that allows you to manage your tasks efficiently. With Task Manager, you
      can create tasks, mark them as complete, edit task titles, and remove tasks. The application provides a
      user-friendly interface to help you stay organized and keep track of your tasks.</p>

    <h2>Features:</h2>
    <ol>
      <li>Add Task: Easily add a new task by typing the task title in the input field and pressing the "+" button or
        Enter key. If the input field is empty, an error message will be displayed.
      </li>
      <li>Remove Task: Remove a task by clicking the close (X) button next to the task. This action will permanently
        delete the task from the list.
      </li>
      <li>Change Task Status: Mark a task as complete or active by checking or unchecking the checkbox next to the task
        title.
      </li>
      <li>Edit Task Title: To edit a task title, click the "Edit" button next to the task. The task title will transform
        into an input field where you can modify the title. Press Enter to save the changes or press Esc to cancel the
        editing.
      </li>
      <li>Filter Tasks: The application provides three filter options: "All," "Active," and "Completed." Click on the
        respective filter tab to show tasks based on their status.
      </li>
      <li>Clear Completed Tasks: Remove all completed tasks at once by clicking the "Clear completed" link in the
        footer.
      </li>
      <li>Tasks Count: The application displays the number of active tasks remaining in the footer.</li>
    </ol>

    <h2>Screenshots:</h2>
    <div class="row">
      <div class="col-md-4">
        <img src="../../common/screenshots/all.jpg" alt="Task Manager - All Tasks" class="img-fluid">
        <p class="text-center">Task Manager - All Tasks</p>
      </div>
      <div class="col-md-4">
        <img src="../../common/screenshots/active.jpg" alt="Task Manager - Active Tasks" class="img-fluid">
        <p class="text-center">Task Manager - Active Tasks</p>
      </div>
      <div class="col-md-4">
        <img src="../../common/screenshots/completed.jpg" alt="Task Manager - Completed Tasks" class="img-fluid">
        <p class="text-center">Task Manager - Completed Tasks</p>
      </div>
    </div>

    <h2>Technologies Used:</h2>
    <ul>
      <li>Vue.js: A progressive JavaScript framework for building user interfaces.</li>
      <li>Vuex: A state management pattern and library for Vue.js applications.</li>
      <li>Vue Router: The official routing library for Vue.js that provides navigation and routing functionality.</li>
      <li>Bootstrap: A popular CSS framework for building responsive and mobile-first websites.</li>
    </ul>

    <h2>Implementation Details:</h2>
    <p>The Task Manager application is implemented using the Vue.js framework and Vuex for state management. The Vuex
      store manages the tasks array, which holds the task objects with properties such as ID, title, status, and edit
      mode. Mutations are used to modify the state of the tasks array, while actions are responsible for committing
      mutations and persisting the tasks in the browser's local storage.</p>
    <p>The application's main component consists of an input field for adding tasks, a task list that dynamically
      renders tasks based on the selected filter, and various event handlers for task manipulation. The computed
      properties retrieve the necessary data from the Vuex store to be used in the template.</p>
  </div>
</template>
<style></style>
