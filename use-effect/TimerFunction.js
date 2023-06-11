import React, { useEffect } from 'react'

function TimerFunction() {

    const [countdown, setCountdown] = useState(180);


    useEffect(() => {
        const timerId = setInterval(()=> {
            setCountdown(function(prevState) {
                return prevState - 1;
            })
        }, 1000)

        return function() {
            return clearInterval(timerId)
        }

    }, [])

    useEffect(() => {
        const timerId = setTimeout(()=> {
            setCountdown(countdown - 1)
        }, 1000)

        return function() {
            return clearTimeout(timerId)
        }
    }, [countdown])


  return (
    <div>{countdown}</div>
  )
}

export default TimerFunction