import {useState} from 'react';
import { ListItem,  Divider, ListItemText, Checkbox, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import {Delete, Edit} from "@material-ui/icons"
import EditTodoForm from './EditTodoForm';

const Todo = ({ task, completed, id, deleteTodo, editTodo, toggleCompleted }) => {
    const [isSet, setIsSet] = useState(false)

    return (
        <>
            <ListItem>
                <Checkbox 
                    tabIndex={-1} 
                    checked={completed}
                    onClick={() => toggleCompleted(id)}
                />
                {isSet ? 
                    (<ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                        {task}
                    </ListItemText>)
                    :
                    (<EditTodoForm editTodo={editTodo} id={id}/>)
                }
                <ListItemSecondaryAction>
                    <IconButton 
                        aria-label="delete"
                        onClick={() => deleteTodo(id)}
                    >
                        <Delete/>
                    </IconButton>      
                    <IconButton 
                        aria-label="edit"
                        onClick={() => setIsSet(!isSet)}
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
