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

    const addTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, {id: 4, task: e.target.value, completed: false}])
    }

    const deleteTodo = () => {

    }

    const editTodo = () => {
        
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
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
        </Paper>
    )
}

export default TodoListHooks
