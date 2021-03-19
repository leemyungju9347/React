import {v4 as uuid} from 'uuid'

export const initState = {
  toDos:[],
  completed: []
};

export const ADD = 'add';
export const DEL = 'del';
export const COMPLETED = 'completed';
export const UNCOMPLETED = 'uncompleted'


const reducer = (state,action) => {
  console.log(action);
  console.log('리듀서의 state',state);
  switch(action.type) {
    case ADD:
      return { ...state, toDos : [...state.toDos, {text: action.payload, id : uuid()}] }
    case DEL:
      return { ...state, toDos : state.toDos.filter(toDo => toDo.id !== action.payload) }
    case COMPLETED:
        const comTarget = state.toDos.find(toDo => toDo.id === action.payload)
        return { 
            ...state, 
            toDos : state.toDos.filter(toDo => toDo.id !== action.payload),
            completed : [...state.completed, {...comTarget}] 
        }
    case UNCOMPLETED:
    const uncomTarget = state.completed.find(toDo => toDo.id === action.payload)
    return { 
        ...state, 
        completed : state.completed.filter(toDo => toDo.id !== action.payload),
        toDos : [...state.toDos, {...uncomTarget}] 
    }
    default:
      return;
  }
  
}

export default reducer