import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const starterTodos = [
        {id: uuidv4(), task: 'Hunt Rabbits', completed: false},
        {id: uuidv4(), task: 'Walk dogs', completed: false},
        {id: uuidv4(), task: 'Freeze water', completed: false},
];

const initialState = {
    todos: starterTodos
};

export const TodosContext = createContext()

export const TodosProvider = ({children}) => {
    const [state, setState] = useState(initialState);

    return (
        <TodosContext.Provider value={initialState}>
            {children}
        </TodosContext.Provider>
    )
}

