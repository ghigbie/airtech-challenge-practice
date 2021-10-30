import { ListItem,  Divider, ListItemText, Checkbox, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import {Delete, Edit} from "@material-ui/icons"

const Todo = ({ task, completed, id, deleteTodo, editTodo, toggleCompleted }) => {


    return (
        <>
            <ListItem>
                <Checkbox 
                    tabIndex={-1} 
                    checked={completed}
                    onClick={() => toggleCompleted(id)}
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
                        <Delete/>
                    </IconButton>      
                    <IconButton 
                        aria-label="edit"
                        onClick={() => editTodo(id)}
                    >
                        <Edit/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
        </>
    )
}

export default Todo
