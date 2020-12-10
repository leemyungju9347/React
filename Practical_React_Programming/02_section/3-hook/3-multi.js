import React, {useState} from 'react';

export default function App() {
    const [state,setState] = userState({name: '', age: 0}); 

    return (
        <div>
            <p>{`name is ${state.name}`}</p>
            <p>{`age is ${state.age}`}</p>
            <input 
            type="text" 
            vlaue={state.name}
            onChange={e=>setState({...state,name:e.target.value})}
            />
            <input 
            type="number" 
            vlaue={state.age}
            onChange={e=>setState({...state,age:e.target.value})}
            />
        </div>
    )
}