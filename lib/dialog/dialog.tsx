import React, {Fragment, MouseEventHandler, ReactElement, ReactFragment} from "react";
import './dialog.scss'
import Icon from '../icon'
import ReactDOM from "react-dom";

interface Props {
    visible: boolean
    children: any | undefined
    buttons?: Array<ReactElement>
    onClose?: MouseEventHandler
    onCloseMask?: boolean
}

const Dialog: React.FunctionComponent<Props> = (props) => {
    const x = props.visible ?
        <Fragment>
            <div className="fui-dialog-mask" onClick={props.onCloseMask ? props.onClose : undefined}></div>
            <div className="fui-dialog">
                <div className="fui-dialog-close" onClick={props.onClose}>
                    <Icon name='close' />
                </div>
                <header className="fui-dialog-header">提示</header>
                <main className="fui-dialog-main">{props.children}</main>
                <footer className="fui-dialog-footer">
                    {
                        props.buttons?.map(
                            (button, index) =>
                                React.cloneElement(button, { key: index })
                        )
                    }
                </footer>
            </div>
        </Fragment>
        :
        null;

    return (
        ReactDOM.createPortal(x, document.body)
    )
}

const alert=(content:string)=>{
    const component=<Dialog visible={true} onClose={()=>{
        ReactDOM.render(React.cloneElement(component,{visible:false}),div);
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }}>{content}</Dialog>
    const div=document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component,div)
}

const confirm=(context:string,yes?:()=>void,no?:()=>void)=>{
    const onYes=()=>{
        ReactDOM.render(React.cloneElement(component,{visible:false}),div);
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
        yes?.()
    }
    const onNo=()=>{
        ReactDOM.render(React.cloneElement(component,{visible:false}),div);
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
        no?.()
    }
    const component=(
        <Dialog visible={true}
                onClose={()=>{onNo()}}
                buttons={[<button onClick={onYes}>yes</button>
                    ,<button onClick={onNo}>no</button>]}
        >
            {context}
        </Dialog>
    )
    const div=document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component,div)
}

const modal=(context:ReactElement|ReactFragment)=>{
    const onClose=()=>{
        ReactDOM.render(React.cloneElement(component,{visible:false}),div);
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component=(
        <Dialog visible={true} onClose={onClose}>
        {context}
        </Dialog>
    )
    const div=document.createElement('div')
    document.body.append(div)
    ReactDOM.render(component,div)
    return onClose
}

export {alert,confirm,modal}

export default Dialog;