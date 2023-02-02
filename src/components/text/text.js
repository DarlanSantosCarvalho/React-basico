import React from "react";


const Text = ({color, children}) =>  {
   return(
     <p style={{color:color}}>
        {children.toUpperCase()}
     </p>
   )
}





export default Text