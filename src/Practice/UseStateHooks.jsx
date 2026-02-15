import React from 'react'

const UseStateHooks = () => {
    // print all odd numbers between 1 to 100
    for(let x=1; x<=100; x++){
        if(x%2 != 0){
            console.log(x);
        }
    }
    let counter = 0;
    const increment = () => {
        counter = counter + 1;
        console.log(counter);
    }
    return (
        <div>
            {counter}
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default UseStateHooks
