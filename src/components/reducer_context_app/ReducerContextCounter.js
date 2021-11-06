import { useReducer} from 'react'
// import { CountContext } from './context/CountContext'

const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case "INCREMENT":
            return {count: state.count + action.amount}
        case "DECREMENT":
            return {count: state.count - action.amount}
        case "RESET":
            return {count: 0}
        default:
            return state;
    }
}

const ReducerContextCounter = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
        <div>
            <h2>Count: {state.count} </h2>
            <div style={{margin: '2rem', display: 'flex', justifyContent: 'center'}}>
                <button 
                    onClick={() => dispatch({type: 'INCREMENT', amount: 1})}
                >
                    Increment By 1
                </button>
                <div style={{width: '32px'}} ></div>
                <button 
                    onClick={() => dispatch({type: 'DECREMENT', amount: 1})}
                >
                    Decrement By 1
                </button>
                <div style={{width: '32px'}} ></div>
                <button 
                    onClick={() => dispatch({type: 'INCREMENT', amount: 5})}
                >
                    Increment By 5
                </button>
                <div style={{width: '32px'}} ></div>
                                <button 
                    onClick={() => dispatch({type: 'DECREMENT', amount: 5})}
                >
                    Decrement By 5
                </button>
                <div style={{width: '32px'}} ></div>
                <button 
                    onClick={() => dispatch({type: 'RESET'})}
                >
                    Reset to 0
                </button>
            </div>
        </div>
    )
}

export default ReducerContextCounter
