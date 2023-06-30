import {useState, useReducer} from "react";


// useState: 
// 1. initState: 1
// 2> handleState update


// useReducer:
// 1. initState: 1
// 2. Action:
// 3. reducer:
// 3. Dispatch:

// 1. initState
const initState = 0;

// 2. action:

const UP_ACTION = "up";
const DOWN_ACTION = "down";

// 3. reducer:


// 4. payload:







const reducer = (state, action) => {
    switch(action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        
        default:
            throw new Error(`Invalid action ${action}`);
    }
}

const App = function() {

    const [count, dispach] = useReducer(reducer, initState);



    return (
        <>
            <button onClick={dispach(UP_ACTION)}>
                UP
            </button>
            <button onClick={dispach(DOWN_ACTION)}>
                DOWN
            </button>
        </>
    )
}

export default App;