import {useContext} from 'react';
import { Paper, TextField} from "@material-ui/core";
import { TodosContext } from './context/TodosContext';
import useInputState from './hooks/useInputState';

const fromStyles = {
    margin: "1rem 0",
    padding: "0 1rem"
}
const TodoForm = () => {
    const {todoFunctions} = useContext(TodosContext);
    const [value, handleChange, reset] = useInputState();

    return (
        <Paper style={fromStyles}>
            <form 
                onSubmit={ e => {
                    e.preventDefault()
                    todoFunctions.addTodo(value);
                    reset();
                }}
            >
                <TextField 
                    value={value} 
                    onChange={handleChange}
                    
                    margin="normal"
                    label="Add New Todo"
                    fullWidth
                />
            </form>
        </Paper>
    )
}

export default TodoForm
