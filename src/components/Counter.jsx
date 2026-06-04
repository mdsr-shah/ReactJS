import { useState } from "react"


export default function Counter(){

// let [stateVariable, setStateVariable] = useState(initialValue);

let [count, setCount] = useState(0);
let incCount = () => {
    setCount(count+1);
}

return(
    <>
        <h2>Count = {count}</h2>
        <button onClick={incCount}>Increase Count</button>     

    
    </>
)
}