import { List, Paper } from "@material-ui/core";
import Todo from './Todo'

const TodoList = ({todos, deleteTodo, editTodo }) => {
    return (
        <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
            <List>
                {todos.map(todo => (
                    <Todo 
                        task={todo} 
                        key={todo.id} 
                        deleteTodo={deleteTodo} 
                        editTodo={editTodo}
                    />
                ))}
            </List>
        </Paper>
    )
}

export default TodoList
