import video1 from "./videos/video-1.mp4";
import { useRef, forwardRef, useImperativeHandle } from "react";

function Video (ref) {

    const videoRef = useRef()
    useImperativeHandle(ref,function() {
        return ({
            play: function() {
                videoRef.current.play()
            },
            pause: function() {
                videoRef.current.pause()
            }
        })
    } )
    return <video 
        // ref={ref}
        ref={videoRef}
        src={video1}
    />
}

export default forwardRef(Video);