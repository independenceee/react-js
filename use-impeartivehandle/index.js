import {useImperativeHandle} from "react";
import Video from "./Video";

function App() {

    const videoRef = useRef();
    return (
        <>
            <Video ref={videoRef}/>
            <button>Play</button>
            <button>Pause</button>
        </>
    )
}

export default App;

// tùy chình ref của function components