import React, { useEffect } from "react";

// call back luôn được gọi sau khi component được mount 
// gọi call back sau khi component được thêm vào DOM


// 1. useEffect(callBack) 
// Gọi callBack mỗi khi component re-render
// Gọi callBack sau khi component thêm element vào DOM


// 2. useEffect(callBack, [])
// Gọi callBack một lần sau khi component được mount


// 3. useEffect(callBack, [dependences])
// callBack sẽ được gọi lại một lần mỗi khí dependences thay đổi

// 1. Callback luôn được gọi mỗi sau khi component được mounted
// 2. Cleanup function luộn được gọi khi component được unmounted


const tabs = ['posts', 'comments', 'albums']


const Content = function() {

    const [title, setTitle] = React.useState("");
    React.useEffect(() => {
        document.title = title
    })


    const [type, setType] = useState("posts");
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