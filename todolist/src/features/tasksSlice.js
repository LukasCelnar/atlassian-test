import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [{
    id: 939439,
    name: "Hire Lukáš Celnar! 👍 :)",
    completed: false
  }],
  reducers: {
    addTask: (state, action) => {
        state.push(action.payload)
    },
    toggleTask: (state, action) => {
      const taskId = action.payload
      const task = state.find(task => task.id === taskId)
      if (task) {
        task.completed = !task.completed
      }
    },
    deleteTask: (state, action) => {
      const taskId = action.payload
      return state.filter(task => task.id !== taskId)
    },
    editTask: (state, action) => {
      const {taskId, newName} = action.payload
      const task = state.find(task => task.id === taskId)
      task.name = newName
    },
    cleanTasks: (state) => {
      return state.filter(state => !state.completed)
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  addTask,
  cleanTasks,
  editTask, 
  toggleTask,
  deleteTask } = tasksSlice.actions

export default tasksSlice.reducer