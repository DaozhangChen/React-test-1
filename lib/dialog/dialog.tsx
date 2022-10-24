import React, { Fragment } from "react";
import './dialog.scss'
import Icon from '../icon'

interface Props {
    visible: boolean
    children: any | undefined
}

const Dialog: React.FunctionComponent<Props> = (props) => {
    return (
        props.visible ?
            <Fragment>
                <div className="fui-dialog-mask"></div>
                <div className="fui-dialog">
                    <div className="fui-dialog-close">
                        <Icon name='close' />
                    </div>
                    <header className="fui-dialog-header">提示</header>
                    <main className="fui-dialog-main">{props.children}</main>
                    <footer className="fui-dialog-footer">
                        <button>ok</button>
                        <button>cancel</button>
                    </footer>
                </div>
            </Fragment>
            :
            null

    )
}

export default Dialog;