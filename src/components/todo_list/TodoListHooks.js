import { useState } from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid} from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const paperStyles = {
    padding: 0,
    margin: 0,
    height: '100vh',
    backgroundColor: '#fafafa'
}

const TodoListHooks = () => {
    const initialTodos = [
        {id: uuidv4(), task: 'Hunt Rabbits', completed: false},
        {id: uuidv4(), task: 'Walk dogs', completed: false},
        {id: uuidv4(), task: 'Freeze water', completed: false},
    ];
    const [todos, setTodos] = useState(initialTodos);
    console.log(todos);

    const addTodo = task => setTodos([...todos, {id: uuidv4(), task: task, completed: false}]);

    const deleteTodo = id => setTodos(todos.filter( todo => todo.id !== id));

    const toggleCompleted = id => setTodos(todos.map( todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    

    const editTodo = (newTask, id)=> {
        const editedTodo = todos.filter(todo => todo.id === id);
        editedTodo.task = newTask;
        setTodos([...todos, editTodo]);
    }

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
            <Grid container justify='center'>
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
