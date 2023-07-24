import React, { useState, useRef } from 'react';

// Lưu biến ra bên ngoài phạm vi Function Components
// useRef luôn trả về Object { current.value } và giá trị khởi tạo lưu ở 
// .current default bằng undefined
// Mỗi khi set lại không reset inital mà luôn set lại giá trị


const App = function() {
    const [count, setCount] = useState(60);

    const timerId = useRef();


    const handleStart =  function() {
        timerId.current = setInterval(function() {
            setCount(function(prevCount) {
                return prevCount - 1;
            })
        }, 1000)
    }

    const handleStop = function() {
        clearInterval(timerId.current);
    }

    return (
        <div style={{padding: 20}}>
            <h1>
                {count}
            </h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default App;



