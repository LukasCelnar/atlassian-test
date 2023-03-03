import { useState } from 'react'
import { useSelector } from 'react-redux'
import TaskItem from '../TaskItem'
import TasksFilter from '../TasksFilter'

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks)
    const [filter, setFilter] = useState("all")

    const renderTaskList = () => {
        let filteredTasks = tasks;
        if (filter === "finished") filteredTasks = tasks.filter(task => task.completed)
        else if (filter === "unfinished") filteredTasks = tasks.filter(task => !task.completed)

        return filteredTasks.map(task => {
            return <TaskItem key={task.id} task={task} />
        })
    }

    return (
        <div className="TaskList">
            <TasksFilter setFilter={setFilter} filter={filter} />
            {renderTaskList()}
        </div>
    )
}

export default TaskList