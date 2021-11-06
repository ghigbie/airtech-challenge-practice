import { createContext, useReducer} from "react";
import todosReducer from './../reducers/todosReducer';
import { v4 as uuidv4 } from 'uuid';

const starterTodos = [
        {id: uuidv4(), task: 'Buy Rabbits', completed: false},
        {id: uuidv4(), task: 'Walk pet snake', completed: false},
        {id: uuidv4(), task: 'Melt copper', completed: false},
];


export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = ({children}) => {
    const [todos, dispatch] = useReducer(todosReducer, starterTodos);

    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}
