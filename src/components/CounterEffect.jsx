import { useState, useEffect } from "react";

export default function CounterEffect() {
    let [count, setCount] = useState(0);

    let incCount = () => {
        setCount((curCount) => curCount + 1);
    };

    useEffect(function() {
        console.log("useEffect called");
    });

    return (
        <div> 
            <h3>The count = {count}</h3>
            <button onClick={incCount}>+1</button>
        </div>
    
    );

}