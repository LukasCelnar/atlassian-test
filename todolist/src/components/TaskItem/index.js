import './TaskItem.scss'

import Checkbox from '@mui/material/Checkbox';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import { blue } from '@mui/material/colors';
import { useDispatch } from 'react-redux'
import { toggleTask, deleteTask, editTask } from '../../features/tasksSlice'
import { useState, useRef } from 'react';

const TaskItem = ({task}) => {
    const { id, name, completed } = task

    const [editMode, setEditMode] = useState(false)
    const [nameInputValue, setNameInputValue] = useState(name)

    const nameInputRef = useRef(null);
    const dispatch = useDispatch()

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

    const onEditClick = () => {
        nameInputRef.current.focus();
        setEditMode(!editMode);
    }

    const onDeleteClick = () => {
        dispatch(deleteTask(id))
    }

    const onNameInputChange = (e) => {
        setNameInputValue(e.target.value)
    }

    // blur = lost focus
    const onNameInputBlur = () => {
        if (nameInputValue !== "") {
            dispatch(editTask({taskId: id, newName: nameInputValue}))
            setNameInputValue(nameInputValue)
        } else {
            setNameInputValue(name)
        }
        setEditMode(false)
    }

    return (
        <div className='TaskItem'>
            <Checkbox 
                sx={{
                    color: blue[800],
                    '&.Mui-checked': {
                      color: blue[600],
                    },
                  }}
                className='TaskItem-checkbox' 
                {...label} 
                onChange={() => dispatch(toggleTask(id))}
                checked={completed} />
            <input 
                style={{textDecorationLine: completed ? "line-through" : null}}
                value={nameInputValue}
                onChange={(e) => onNameInputChange(e)}
                readOnly={editMode ? false : true}
                onBlur={() => onNameInputBlur()}
                ref={nameInputRef}
                className='TaskItem-name' />
            <EditIcon className='TaskItem-edit' onClick={() => onEditClick()} />
            <CancelIcon className='TaskItem-delete' onClick={() => onDeleteClick()} />
        </div>
    )
}

export default TaskItem;