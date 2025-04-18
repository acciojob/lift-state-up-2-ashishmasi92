
import React, { useState } from "react";

import Child from "./Child";
import './../styles/App.css';

const App = () => {
let [state,setState] = useState("")



  return <div className="parent">
<h1>Parent Component</h1>
    <p>{state}</p>

<Child
func = {setState}
/>
  
</div>
 
}

export default App
