import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const starterTodos = [
        {id: uuidv4(), task: 'Buy Rabbits', completed: false},
        {id: uuidv4(), task: 'Walk pet snake', completed: false},
        {id: uuidv4(), task: 'Melt copper', completed: false},
];


export const TodosContext = createContext()

export const TodosProvider = ({children}) => {
    const [todos, setTodos] = useState(starterTodos)

    const addTodo = task => setTodos([...todos, {id: uuidv4(), task: task, completed: false}]);

    const deleteTodo = id => setTodos(todos.filter( todo => todo.id !== id));

    const toggleCompleted = id => setTodos(todos.map( todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));

    const editTodo = (newTask, id)=> setTodos(todos.map(todo => todo.id === id ? {...todo, task: newTask} : todo));

   const todoFunctions = { addTodo, deleteTodo, toggleCompleted, editTodo};

    return (
        <TodosContext.Provider value={{todos, todoFunctions}}>
            {children}
        </TodosContext.Provider>
    )
}
