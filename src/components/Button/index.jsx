import './styles.css'
import { Component } from "react";

export class Button extends Component{
    
    render(){
        const {text,onClick,disable} = this.props
        return(
            <button disabled={disable} className="button" onClick={onClick}>
                {text}
            </button>
        )
    }
}
