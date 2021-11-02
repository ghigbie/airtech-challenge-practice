import { useContext } from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid} from "@material-ui/core";
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {TodosContext } from './context/TodosContext';

const paperStyles = {
    padding: 0,
    margin: 0,
    height: '100vh',
    backgroundColor: '#fafafa'
}

const ContextTodoApp = () => (
        <Paper style={paperStyles}>
            <AppBar 
                color='primary'
                position='static'
                style={{height: "64px"}}
                >   
                    <Toolbar>
                        <Typography color='inherit'>Todos with Context & Hooks</Typography>
                    </Toolbar>
            </AppBar>
            <Grid container justifyContent='center'>
                <Grid item xs={11} md={8} lg={4} style={{marginTop: '1rem'}}>
                     <TodoForm /> 
                     <TodoList />
                </Grid>
            </Grid>
        </Paper>
);

export default ContextTodoApp
