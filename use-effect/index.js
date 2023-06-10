import React, { useEffect } from "react";

// call back luôn được gọi sau khi component được mount 
// gọi call back sau khi component được thêm vào DOM
const Content = function() {

    const [title, setTitle] = React.useState("");
    React.useEffect(() => {
        document.title = title
    })



    const [posts, setPosts]= useState();


    useEffect(() => {
        fetch("")
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [])


    return (
        <div>
            <input value={title} onChange={function(event) {
                return setTitle(event.target.value)
            }}/>

            {posts.map(function(post, index) {
                return (
                    <li key={index}>{post.title}</li>
                )
            })}
        </div>
    )
}


export default Content;