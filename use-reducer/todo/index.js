import { useReducer, useRef } from "react";
import reducer, {initialState} from "./reducer";
import { setJob, addJob, deleteJob } from "./action";
import logger from "./logger";
// reducer
// 1. initialState
// 2. action
// 3. reducer



const Todo = function() {

    const [state, dispach] = useReducer(logger(reducer), initialState);
    const {job, jobs} = state;

    const inputRef = useRef();
    const handleAddJob = function() {
        dispach(addJob(job))
        dispach(setJob(""))
        inputRef.current.focus()

    }
    return ( 
        <>
            <h3>Todo</h3>
            <input 
                ref={inputRef}
                value={job}
                onChange={e=> {
                    dispach(setJob(e.target.value))
                }}
            />
            <button onClick={handleAddJob}>Add</button>
            <ul>
                {jobs.map((job, key) => (
                    <li key={key}>{job} 
                        <span onClick={() => dispach(deleteJob(index))}>&time;</span>
                    </li>
                ))}
            </ul>
        </>
    )
}