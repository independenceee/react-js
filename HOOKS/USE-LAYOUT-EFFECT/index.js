import React, {useLayoutEffect, useState} from 'react';

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM
// 3. Render lại UI
// 4. Gọi cleanup new dependencies thay đổi
// 5. Gọi useEffect Callbacks

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM
// 3. Gọi cleanup new dependencies thay đổi
// 4. Gọi useEffect Callbacks
// 3. Render lại UI

const App = function() {
    const [count, setCount] = useState(0)
    
    useLayoutEffect(() => {
        if(count > 3) {
            setCount(0)
        }
    }, [count])


    const handleRun = function() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}


export default App;