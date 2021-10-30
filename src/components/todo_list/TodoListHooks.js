import { useState } from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid} from "@material-ui/core";
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
        {id: 1, task: 'Hunt Rabbits', completed: false},
        {id: 2, task: 'Walk dogs', completed: false},
        {id: 3, task: 'Freeze water', completed: false},
    ];
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (e) => setTodos([...todos, {id: 4, task: e.target.value, completed: false}]);

    const deleteTodo = id => setTodos(todos.filter( todo => todo.id !== id));

    const setCompleted = compTodo => {
        const completedTodo = todos.find(todo => todo.id === compTodo.id);
        completedTodo.completed = !completedTodo.completed;
        const allTodos = todos.filter(todo => todo.id !== compTodo.id);
        setTodos([...allTodos, completedTodo])
    }

    const editTodo = (newTask, id)=> {
        const editedTodo = todos.filter(todo => todo.id === id);
        editedTodo.task = newTask;
        setTodos([...todos, editTodo]);
    }

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
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                        setCompleted={setCompleted}
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoListHooks
