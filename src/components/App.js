
import React from "react";
import { useState } from "react";
import './../styles/App.css';

const [count , setCount]=useState(0)
const App = () => {
  
  return (
    <div>
       <p>Button clicked {count} times</p>
       <button onClick={() => setCount(count + 1)}>Click me</button>


        {/* Do not remove the main div */}
    </div>
  )
}

export default App
