import React, { useState } from 'react'

const useCounter = (initial = 0) => {
    const [count, setCount] = useState(initial)

    const increment = () => setCount((c) => {
        return setCount(c+1);
    });

    const decrement = () => setCount((c) => {
        return setCount(c-1);
    });

    const reset = () => setCount(() => {
        return setCount(initial);
    });
    return {count, increment, decrement, reset}
}

export default useCounter;
