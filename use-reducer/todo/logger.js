function logger(reducer) {
    

    return (preState, action) => {

        console.group(action.type)
        console.log(preState);
        console.log(action)
        const newState = reducer(preState, action);
        console.log(newState);
        console.groupEnd()
        return newState;
    };
}


export default logger;