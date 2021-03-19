import React, { useReducer, useState } from "react";
import reducer, {initState, ADD, DEL, COMPLETED, UNCOMPLETED} from './reducer'

function App() {
  const [state,dispatch] = useReducer(reducer,initState);
  const [newToDo, setNewToDo] = useState('');

  // console.log('APP component의 state',state);
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
              <button onClick={()=> dispatch({type:COMPLETED, payload:toDo.id})}>✅</button>
            </li>
          ))
        }
      </ul>
      <ul>
        {
          state.completed.length !== 0 && (
            <>
              <h2>Completed</h2>
              { state.completed.map(toDo => (
                  <li key={toDo.id}>
                    <span>{toDo.text}</span>
                    <button onClick={()=> dispatch({type:DEL, payload:toDo.id})}>❌</button>
                    <button onClick={()=> dispatch({type:UNCOMPLETED, payload:toDo.id})}>👍🏻</button>
                  </li>
                ))
              }
            </>
          )
        }
      </ul>
    </div>
  );
}

export default App;
