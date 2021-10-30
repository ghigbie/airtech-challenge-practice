import { List, Paper } from "@material-ui/core";
import Todo from './Todo'

const TodoList = ({todos, todoFunctions}) => {
    return (
        <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
            <List>
                {todos.map(todo => (
                    <Todo 
                        {...todo}
                        {...todoFunctions}
                        key={todo.id} 
                        
                    />
                ))}
            </List>
        </Paper>
    )
}

export default TodoList
