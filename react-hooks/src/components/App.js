import React from "react";
import Add from "./Add";
import { useState } from "../context";
import List from "./List";
import Todo from "./Todo";

function App() {
  const {toDos, completed} = useState()

  return (
    <div className="todoList">
      <h1>Add to do</h1>
      <Add />
      <List name={'To Dos'}>
        {
          toDos.map( toDo => <Todo key={toDo.id} id={toDo.id} text={toDo.text} /> )
        }
      </List>
      <List name={completed.length !== 0 ? 'Completed' : '' }>
        {
          completed.map( toDo => <Todo key={toDo.id} id={toDo.id} text={toDo.text} isCompleted={true}/> )
        }
      </List>
    </div>
  );
}

export default App;
