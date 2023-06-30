import { memo} from 'react';


const Content = function({onIncrease}) {

    console.log("re-render");

    return (
        <h1 onClick={onIncrease}>Hi</h1>
    )

}

export default memo(Content);