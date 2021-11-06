import {useContext} from 'react';
import { Paper, TextField} from "@material-ui/core";
import { DispatchContext  } from './context/TodosContext';
import useInputState from './hooks/useInputState';

const fromStyles = {
    margin: "1rem 0",
    padding: "0 1rem"
}
const TodoForm = () => {
    const dispatch = useContext(DispatchContext);
    const [value, handleChange, reset] = useInputState();

    return (
        <Paper style={fromStyles}>
            <form 
                onSubmit={ e => {
                    e.preventDefault()
                    dispatch({type: 'ADD', task: value});
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
