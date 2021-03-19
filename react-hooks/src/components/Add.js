import React, { useState } from 'react';
import { useDispatch } from '../context';
import { ADD } from '../actions';


const Add = () => {
    const [newToDo, setNewToDo] = useState('');
    const dispatch = useDispatch()

    const onSubmit = ev => {
        ev.preventDefault();

        dispatch({ type : ADD, payload : newToDo })
        setNewToDo('')
    }
    const onChange = ev => {
        const { target : { value } } = ev;

        setNewToDo(value)
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
            type="text" 
            placeholder="Write to do" 
            value={newToDo}
            onChange={onChange}
            />
        </form>
    )
}

export default Add