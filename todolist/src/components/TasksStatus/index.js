import "./TasksStatus.scss"

import { useSelector } from "react-redux"

const TasksStatus = () => {
    const tasks = useSelector((state) => state.tasks)

    return (
        <div className="TasksStatus">
            <div className="TasksStatus-finished">
                <div className="TasksStatus-finished-title">Finished</div>
                <div className="TasksStatus-finished-number">{tasks.reduce((count, item) => item.completed ? count + 1 : count, 0)}</div>
            </div>
            <div className="TasksStatus-unfinished">
                <div className="TasksStatus-unfinished-title">Unfinished</div>
                <div className="TasksStatus-unfinished-number">{tasks.reduce((count, item) => !item.completed ? count + 1 : count, 0)}</div>
            </div>
        </div>
    )
}

export default TasksStatus