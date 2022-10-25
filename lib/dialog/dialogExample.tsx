import React, { useState } from "react"
import Dialog, {alert, confirm, modal} from "./dialog"



const DE = () => {
    const [x, setX] = useState(false)
    const openModal=()=>{
        const close=modal(<h1>你好
            <button onClick={()=>close()}>close</button>
        </h1>)
    }
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
            <button onClick={
                ()=>confirm('确认',
                ()=>{console.log('yes')},
                ()=>{console.log('no')})}>Confirm</button>
            <button onClick={()=>openModal()}>你好</button>
        </div>
    )
}

export default DE