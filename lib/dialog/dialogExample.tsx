import React, { useState } from "react"
import Dialog from "./dialog"



const DE = () => {
    const [x, setX] = useState(false)
    return (
        <div>
            <button onClick={() => setX(!x)}>onclick</button>
            <Dialog visible={x} >
                <strong>hi</strong>
            </Dialog>
        </div>
    )
}

export default DE