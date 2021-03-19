import React from 'react';
import { COMPLETED, DEL, UNCOMPLETED } from '../actions';
import { useDispatch } from '../context';

const Todo = ({text, id, isCompleted}) => {
    const dispatch = useDispatch();
    
    return (
        <li key={id}>
            <span>{text}</span>
            <button onClick={()=> dispatch({type:DEL, payload:id})}>❌</button>
            <button onClick={()=> dispatch({type: isCompleted ? UNCOMPLETED : COMPLETED, payload:id})}>
                { isCompleted ? '👍🏻' : '✅' }
            </button>
        </li>
    )
}

export default Todo