import {ADD_JOB, SET_JOB, DELETE_JOB} from "./constant"

export const initialState = {
    job: '',
    jobs: [],
}

const reducer = function(state, action) {

    let newState;
        switch(action.type) {
            case SET_JOB:
                return {
                    ...state,
                    job: action.payload
                }

            case ADD_JOB: {
                return{
                    ...state,
                    job: '',
                    job: [...state.jobs, action.payload]
                }
            }
            case DELETE_JOB: {
                const newJobs = [...state.jobs];
                newJobs.splice(action.payload, 1);
                return {
                    ...state,
                    jobs: newJobs,
                }
            }

            default: 
                throw new Error("Invalid action type")
        }

}

export default reducer;