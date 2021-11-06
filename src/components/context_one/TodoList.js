import {useContext} from 'react';
import { List, Paper, Divider } from "@material-ui/core";
import Todo from './Todo'
import {TodosContext, DispatchContext} from './context/TodosContext';

const TodoList = () => {
    const todos = useContext(TodosContext);
    const dispatch = useContext(DispatchContext);

    if(todos.length){
        return (
            <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
                <List>
                    {todos.map((todo, index) => (
                        <div key={todo.id} >
                            <Todo 
                                {...todo}
                                dispatch={dispatch}
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
