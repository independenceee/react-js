import React, {useEffect} from "react";




const DomEvent = function() {


    const [showGoToTop, setShowGoToTop] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)


    useEffect(() => {

        const handleScroll = function() {
            setShowGoToTop(window.screenY >=200 );
        }

        window.addEventListener("scroll", handleScroll )

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {


        const handleResize = function() {
            setWidth(window.innerWidth)
        }


        window.addEventListener("resize", handleResize);


        return ()=> {
            window.removeEventListener("resize", handleResize)
        }
    }, [])


    return (
        <div>
            {
                showGoToTop && (
                    <button>showGoToTop</button>
                )
            }
        </div>
    )
}

export default DomEvent;