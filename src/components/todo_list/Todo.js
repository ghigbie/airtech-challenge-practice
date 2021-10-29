import { ListItem,  Divider, ListItemText, Checkbox, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import {DeleteIcon, EditIcon} from "@material-ui/icons"

const Todo = ({ todo, deleteTodo, editTodo }) => {
    const {task, completed, id} = todo;

    return (
        <>
            <ListItem>
                <Checkbox 
                    tabIndex={-1} 
                    checked={completed}
                />
                <ListItemText 
                    style={{textDecoration: completed ? "line-through" : "none"}}
                >
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton 
                        aria-label="delete"
                        onClick={() => deleteTodo(id)}
                    >
                        <DeleteIcon/>
                    </IconButton>      
                    <IconButton 
                        aria-label="edit"
                        onClick={() => editTodo(id)}
                    >
                        <EditIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
        </>
    )
}

export default Todo
