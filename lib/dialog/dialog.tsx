import React, { Fragment, MouseEventHandler, ReactElement } from "react";
import './dialog.scss'
import Icon from '../icon'
import ReactDOM from "react-dom";

interface Props {
    visible: boolean
    children: any | undefined
    buttons: Array<ReactElement>
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
                        props.buttons.map(
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

export default Dialog;