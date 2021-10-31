import {useContext} from 'react';
import { List, Paper, Divider } from "@material-ui/core";
import Todo from './Todo'
import {TodosContext } from './context/TodosContext';

const TodoList = () => {
    const {todos, todoFunctions} = useContext(TodosContext);

    if(todos.length){
        return (
            <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
                <List>
                    {todos.map((todo, index) => (
                        <div key={todo.id} >
                            <Todo 
                                {...todo}
                                {...todoFunctions}
                            />
                            {index < todos.length -1 && <Divider />}
                        </div>
                    ))}
                </List>
            </Paper>
        );
    }
    return null;
}

export default TodoList
