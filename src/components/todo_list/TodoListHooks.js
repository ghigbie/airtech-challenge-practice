import { Typography, Paper, AppBar, Toolbar, Grid} from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useLocalStorageState from './hooks/useLocalStorageState';

const paperStyles = {
    padding: 0,
    margin: 0,
    height: '100vh',
    backgroundColor: '#fafafa'
}

const TodoListHooks = () => {
    const [todos, setTodos] = useLocalStorageState("todos");

    const addTodo = task => setTodos([...todos, {id: uuidv4(), task: task, completed: false}]);

    const deleteTodo = id => setTodos(todos.filter( todo => todo.id !== id));

    const toggleCompleted = id => setTodos(todos.map( todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));

    const editTodo = (newTask, id)=> setTodos(todos.map(todo => todo.id === id ? {...todo, task: newTask} : todo));

    const todoFunctions = { addTodo, deleteTodo, toggleCompleted, editTodo};

    return (
        <Paper style={paperStyles}>
            <AppBar 
                color='primary'
                position='static'
                style={{height: "64px"}}
                >   
                    <Toolbar>
                        <Typography color='inherit'>Todos with Hooks</Typography>
                    </Toolbar>
            </AppBar>
            <Grid container justifyContent='center'>
                <Grid item xs={11} md={8} lg={4} style={{marginTop: '1rem'}}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList 
                        todos={todos} 
                        todoFunctions={todoFunctions}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoListHooks
