import { Paper, TextField} from "@material-ui/core";
import useInputState from './hooks/useInputState';

const EditTodoForm = ({editTodo}) => {
    const [value, handleChange, reset] = useInputState();

    return (
        <Paper>
            <form 
                onSubmit={ e => {
                    e.preventDefault()
                    editTodo(value);
                    reset();
                }}
            >
                <TextField 
                    value={value} 
                    onChange={handleChange}
                    margin="normal"
                    fullWidth
                />
            </form>
        </Paper>
    )
}

export default EditTodoForm
