import React, {createContext,useContext,useReducer} from 'react';
import reducer, {initState} from './reducer'

const ToDosContext = createContext();


const ToDosProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initState);

    return <ToDosContext.Provider value={{state,dispatch}}>{children}</ToDosContext.Provider>
}


export const useDispatch = () => {
    const {dispatch} = useContext(ToDosContext);
    
    return dispatch
}

export const useState = () => {
    const { state } = useContext(ToDosContext);

    return state
}

// export const useToDos = () => {
//     const { state : { toDos } } = useContext(ToDosContext)

//     return toDos
// }

// export const useCompleted = () => {
//     const { state : { completed } } = useContext(ToDosContext);
    
//     return completed
// }

export default ToDosProvider