import { ListItem, ListItemText, Checkbox, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import {Delete, Edit} from "@material-ui/icons"
import EditTodoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';

const Todo = ({ task, completed, id, deleteTodo, editTodo, toggleCompleted }) => {
    const [isEditing, toggleIsEditing] = useToggleState();

    return (
        <ListItem style={{height: "64px"}}>
            { isEditing ? 
               (<EditTodoForm 
                    editTodo={editTodo} 
                    toggleIsEditing={toggleIsEditing} 
                    task={task}
                    id={id}
                />)
               :
               (<>
                <Checkbox 
                    tabIndex={-1} 
                    checked={completed}
                    onClick={() => toggleCompleted(id)}
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
                        onClick={() => deleteTodo(id)}
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
