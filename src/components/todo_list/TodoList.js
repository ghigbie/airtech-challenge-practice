import { List, Paper } from "@material-ui/core";
import Todo from './Todo'

const TodoList = ({todos, deleteTodo, editTodo, setCompleted }) => {
    return (
        <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
            <List>
                {todos.map(todo => (
                    <Todo 
                        todo={todo} 
                        key={todo.id} 
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                        setCompleted={setCompleted}
                    />
                ))}
            </List>
        </Paper>
    )
}

export default TodoList
