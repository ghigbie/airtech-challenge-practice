import { Paper, TextField} from "@material-ui/core";
import useInputState from './hooks/useInputState';

const fromStyles = {
    margin: "1rem 0",
    padding: "0 1rem"
}
const TodoForm = ({addTodo}) => {
    const [value, handleChange, reset] = useInputState();

    return (
        <Paper style={fromStyles}>
            <form 
                onSubmit={ e => {
                    e.preventDefault()
                    addTodo(value);
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
