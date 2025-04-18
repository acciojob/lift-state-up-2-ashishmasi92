import React from "react";



const Child = (props)=>{

    return <div className="child">
        <h1>Children Component</h1>
     
      <input type="text" onChange={(e)=>{
          props.func(e.target.value)
      }} />
    </div>
}

export default Child