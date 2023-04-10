import { useReducer, useRef } from "react";


// reducer
// 1. initialState

const initialState = {
    job: '',
    jobs: [],
}

// 2. action

const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";


const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

// 3. reducer


const reducer = function(state, action) {

    let newState;
        switch(action.type) {
            case SET_JOB:
                newState=  {
                    ...state,
                    job: action.payload
                }
                break;

            case ADD_JOB: {
                newState= {
                    ...state,
                    job: '',
                    job: [...state.jobs, action.payload]
                }
                break;
            }
            case DELETE_JOB: {
                const newJobs = [...state.jobs];
                newJobs.splice(action.payload, 1);
                newState = {
                    ...state,
                    jobs: newJobs,
                }
            }

            default: 
                throw new Error("Invalid action type")
        }

        return newState;
}

const Todo = function() {

    const [state, dispach] = useReducer(reducer, initialState);
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