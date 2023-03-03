import { useDispatch } from 'react-redux'
import { cleanTasks } from '../../features/tasksSlice'

import './TasksFilter.scss'

const TasksFilter = ({ setFilter, filter }) => {
    const dispatch = useDispatch()

    const onAllButtonClick = () => {
        setFilter("all")
    }

    const onFinishedButtonClick = () => {
        setFilter("finished")
    }

    const onUnfinishedButtonClick = () => {
        setFilter("unfinished")
    }
    
    const onCleanButtonClick = () => {
        dispatch(cleanTasks())
    }
    
    return (
        <div className='TasksFilter'>
            <div className='TasksFilter-label'>Filter:</div>
            <button 
                onClick={() => onAllButtonClick()}
                className={`TasksFilter-button TasksFilter-button-all ${filter === "all" ? "TasksFilter-button-all-selected" : null}`}>All</button>
            <button 
                onClick={() => onFinishedButtonClick()}
                className={`TasksFilter-button TasksFilter-button-finished ${filter === "finished" ? "TasksFilter-button-finished-selected" : null}`}>Finished</button>
            <button 
                onClick={() => onUnfinishedButtonClick()}
                className={`TasksFilter-button TasksFilter-button-unfinished ${filter === "unfinished" ? "TasksFilter-button-unfinished-selected" : null}`}>Unfinished</button>
            <button 
                onClick={() => onCleanButtonClick()}
                className='TasksFilter-button TasksFilter-button-clean'>Clean</button>
        </div>
    )
}

export default TasksFilter;