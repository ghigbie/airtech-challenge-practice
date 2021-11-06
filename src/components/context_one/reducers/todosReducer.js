import { v4 as uuidv4 } from 'uuid';

const todosReducer = (state, action) => {

    switch(action.type){
        case 'ADD':
            return [...state, {id: uuidv4(), task: action.task, completed: false}];
        case 'DELETE':
            return state.filter(todo => todo.id !== action.id);
        case 'TOGGLE_COMPLETE':
            return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed}: todo);
        case 'EDIT':
            return state.map(todo => todo.id === action.id ? {...todo, task: action.task} : todo);
        default:
            return state;
    }

}

export default todosReducer;