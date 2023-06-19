import {createStore} from "vuex";


const getStorageTasks = () => {
    const storageTasks = localStorage.getItem('tasks');
    return storageTasks ? JSON.parse(storageTasks) : []
}

export default createStore({
    state: {
        tasks: getStorageTasks(),
        filter: 'all'
    },
    mutations: {
        ADD_TASK(state, title) {
            let task = {id: Math.floor(Date.now()), title, isDone: false, isEditMode: false}
            state.tasks = [task, ...state.tasks]
        },
        REMOVE_TASK(state, id) {
            state.tasks = state.tasks.filter((task) => task.id !== id)
        },
        CHANGE_TASK_STATUS(state, {id, status}) {
            state.tasks = state.tasks.map((task) => task.id === id ? {...task, isDone: status} : task)
        },
        CHANGE_TASK_TITLE(state, {id, title}) {
            console.log(title)
            state.tasks = state.tasks.map((task) => task.id === id ? {...task, title} : task)
        },
        CHANGE_TASK_EDIT_MODE(state, {id, isEditModeValue}) {
            state.tasks = state.tasks.map((task) => task.id === id ? {...task, isEditMode: isEditModeValue} : task)
        },
        CHANGE_TASKS_FILTER(state, filter) {
            state.filter = filter
        },
        REMOVE_COMPLETED_TASKS(state) {
            state.tasks = state.tasks.filter((task) => !task.isDone)
        },
        SET_TASKS(state) {
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
    },
    actions: {
        addTask({commit}, title) {
            commit('ADD_TASK', title)
            commit('SET_TASKS');
        },
        removeTask({commit}, id) {
            commit('REMOVE_TASK', id)
            commit('SET_TASKS');
        },
        changeTaskStatus({commit}, payload) {
            commit('CHANGE_TASK_STATUS', payload)
            commit('SET_TASKS');
        },
        changeTaskTitle({commit}, payload) {
            commit('CHANGE_TASK_TITLE', payload)
            commit('SET_TASKS');
        },
        changeTaskEditMode({commit}, payload) {
            commit('CHANGE_TASK_EDIT_MODE', payload)
            commit('SET_TASKS');
        },
        changeTasksFilter({commit}, filter) {
            commit('CHANGE_TASKS_FILTER', filter)
            commit('SET_TASKS');
        },
        removeCompletedTasks({commit}) {
            commit('REMOVE_COMPLETED_TASKS')
            commit('SET_TASKS');
        }

    },
    getters: {
        getTasks(state) {
            if (state.filter === 'active') {
                return state.tasks.filter((task) => !task.isDone);
            } else if (state.filter === 'completed') {
                return state.tasks.filter((task) => task.isDone);
            } else {
                return state.tasks;
            }
        },
        getTasksCount(state) {
            return state.tasks.filter((task) => !task.isDone).length
        },
        getFilterValue(state) {
            return state.filter
        }
    }
})