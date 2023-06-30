import React, { useRef, useEffect } from 'react'

const DomElement = function() {

    const domRef = useRef();
    useEffect(() => {
        console.log(domRef.current) // Lấy ra DOM element
        const rect = domRef.current.getBoundingClientRect();
        console.log(rect); // lấy ra các thuộc tính của element
    }, [])

    return (
        <div ref={useRef}></div>
    )
}

export default DomElement