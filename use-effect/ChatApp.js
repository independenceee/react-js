import React, { useEffect, useState } from 'react'


const emmitComment = function(id) {
    setInterval(function() {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `lesson ${id}`
            })
        )
    }, 2000)
}

emmitComment()


function ChatApp() {

    const [lessonId, setLessonId] = useState(1);

    useEffect(function() {
        const handleCommit = function({ detail }) {
            console.log(detail)
        }

        window.addEventListener(`lesson-${lessonId}`, handleCommit);

        return function() {
            window.removeEventListener(`lesson-${lessonId}`, handleCommit)
        }
    }, [lessonId]);

  return (
    <div>ChatApp</div>
  )
}

export default ChatApp