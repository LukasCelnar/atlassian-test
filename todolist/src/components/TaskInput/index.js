import "./TaskInput.scss"

import { useDispatch } from 'react-redux'
import { addTask } from '../../features/tasksSlice'
import { useState } from "react"

const TaskInput = () => {
      const [taskName, setTaskName] = useState("")

      const dispatch = useDispatch()

      const addNewTask = () => {
            if (taskName === "") return
            dispatch(addTask({
                  // generate random id
                  id: Math.floor(Math.random() * 1000000),
                  name: taskName,
                  completed: false
            }))
            setTaskName("")
      }

      const onAddClick = () => {
            addNewTask()
      }

      const onTaskInputKeyDown = (e) => {
            if (e.key === 'Enter') {
                  addNewTask()
            }
          };

      return (
            <div className="TaskInput">
                  <input 
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        className="TaskInput-input"
                        onKeyDown={(e) => onTaskInputKeyDown(e)}
                        placeholder="Add new task..." />
                  <button className="TaskInput-button" onClick={() => onAddClick()}>Add</button>
            </div>
      )
}

export default TaskInput