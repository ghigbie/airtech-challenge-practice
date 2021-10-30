import { TextField} from "@material-ui/core";
import useInputState from './hooks/useInputState';

const formStyles = {
    marginLeft: "1rem",
    width: "50%"
}

const EditTodoForm = ({editTodo, id, task, toggleIsEditing}) => {
    const [value, handleChange, reset] = useInputState(task);

    return (
            <form 
                onSubmit={ e => {
                    e.preventDefault()
                    editTodo(value, id);
                    toggleIsEditing();
                    reset();
                }}
                style={formStyles}
            >
                <TextField 
                    value={value} 
                    onChange={handleChange}
                    margin="normal"
                    fullWidth
                    autoFocus
                />
            </form>
    )
}

export default EditTodoForm
