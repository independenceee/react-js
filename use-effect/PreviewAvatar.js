import React, {useState, useEffect} from "react";


const PreviewAvatar = function() {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = function(event) {
        const file = event.target.files[0];
        
        file.preview = URL.createObjectURL(file);

        setAvatar(file)
    }

    return (
        <>
            <input 
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar?.preview} alt="" />
            )}
        </>
    )
}