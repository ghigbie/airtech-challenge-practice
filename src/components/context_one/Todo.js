import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import {Delete, Edit} from "@material-ui/icons"
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';


const Todo = ({ task, completed, id, dispatch}) => {
    const [isEditing, toggleIsEditing] = useToggleState();

    return (
        <ListItem style={{height: "64px"}}>
            { isEditing ? 
               (<EditTodoForm 
                    dispatch={dispatch} 
                    toggleIsEditing={toggleIsEditing} 
                    task={task}
                    id={id}
                />)
               :
               (<>
                <Checkbox 
                    tabIndex={-1} 
                    checked={completed}
                    onClick={() => dispatch({type: 'TOGGLE_COMPLETE', id})}
                />
                <ListItemText 
                    style={{textDecoration: completed ? "line-through" : "none"}}
                    onClick={toggleIsEditing}
                >
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton 
                        aria-label="delete"
                        onClick={() => dispatch({type: 'DELETE', id})}
                    >
                        <Delete/>
                    </IconButton>      
                    <IconButton 
                        aria-label="edit"
                        onClick={toggleIsEditing}
                    >
                        <Edit/>
                    </IconButton>
                </ListItemSecondaryAction>
               </>)
            }
        </ListItem>
    )
}

export default Todo
