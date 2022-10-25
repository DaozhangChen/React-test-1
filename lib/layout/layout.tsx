import React from "react";
interface Props extends React.HtmlHTMLAttributes<HTMLElement>{

}
const Layout:React.FunctionComponent<Props> =(props)=>{
    const {className,...rest} = props
    return (
        <div className={className} {...rest}>
            {props.children}
        </div>
    )
}

export default Layout