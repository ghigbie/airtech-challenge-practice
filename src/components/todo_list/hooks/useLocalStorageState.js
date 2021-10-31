
import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialTodos = [
        {id: uuidv4(), task: 'Hunt Rabbits', completed: false},
        {id: uuidv4(), task: 'Walk dogs', completed: false},
        {id: uuidv4(), task: 'Freeze water', completed: false},
];

const useLocalStorageState = (key, defaultVal = initialTodos) => {
    const [state, setState] = useState(() => {
        let val;
        try{
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
        }catch(e){
            val = defaultVal;
        }
        return val;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [state, setState];
}

export default useLocalStorageState