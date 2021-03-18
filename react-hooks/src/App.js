import React, { useReducer, useState } from "react";
import {v4 as uuid} from 'uuid'

const initState = {
  toDos:[]
};
const ADD = 'add';
const DEL = 'del'


const reducer = (state,action) => {
  console.log(action);
  console.log('리듀서의 state',state);
  switch(action.type) {
    case ADD:
      return { toDos : [...state.toDos, {text: action.payload, id : uuid()}] }
    case DEL:
      return { toDos : state.toDos.filter(toDo => toDo.id !== action.payload) }
    default:
      return;
  }
  
}

function App() {
  const [state,dispatch] = useReducer(reducer,initState);
  const [newToDo, setNewToDo] = useState('');

  console.log('APP component의 state',state);
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
    <div className="todoList">
      <h1>Add to do</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Write to do" 
          value={newToDo}
          onChange={onChange}
        />
      </form>
      <ul>
        <h2>To Dos</h2>
        {
          state.toDos.map(toDo => (
            <li key={toDo.id}>
              <span>{toDo.text}</span>
              <button onClick={()=> dispatch({type:DEL, payload:toDo.id})}>❌</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
