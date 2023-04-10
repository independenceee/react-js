import {useImperativeHandle} from "react";
import Video from "./Video";

function App() {
    return (
        <>
            <Video/>
            <button>Play</button>
            <button>Pause</button>
        </>
    )
}

export default App;

// tùy chình ref của function components