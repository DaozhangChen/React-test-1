import React, { useState } from "react"
import Dialog from "./dialog"



const DE = () => {
    const [x, setX] = useState(false)
    return (
        <div>
            <button onClick={() => setX(!x)}>onclick</button>
            <Dialog visible={x} buttons={
                [
                    <button onClick={() => setX(false)}>1</button>,
                    <button onClick={() => setX(false)}>2</button>
                ]
            } onClose={() => setX(false)} onCloseMask={true}>
                <strong>hi</strong>
            </Dialog>
        </div>
    )
}

export default DE