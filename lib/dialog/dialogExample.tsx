import React, { useState } from "react"
import Dialog, {alert} from "./dialog"



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
            <button onClick={()=>alert('你好')}>你好</button>
        </div>
    )
}

export default DE