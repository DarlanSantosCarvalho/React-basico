import React from "react";
import './text.css'



class Text extends React.Component {
    render(){
        return(
            <h1 className="texto">{this.props.content}</h1>
        )
    }
}




export default Text