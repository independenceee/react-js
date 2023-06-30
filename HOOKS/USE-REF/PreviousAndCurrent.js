import React, { useState, useEffect, useRef } from "react";


const PreviousAndCurrent = function() {
    const [count, setCount] = useState(60);

    const timerId = useRef()
    const previousCount = useRef()

    useEffect(() => {
        previousCount.current = count;
    }, [count])


    const handleStart = function() {
        timerId.current = setTimeout(function() {
            setCount(function(counter) {
                return counter - 1;
            })
        }, 1000)
    }


    const handleStop = function() {
        clearInterval(timerId.current)
    }

    console.log(count, previousCount.current)

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Start</button>
    </div>
  )
}

export default PreviousAndCurrent;