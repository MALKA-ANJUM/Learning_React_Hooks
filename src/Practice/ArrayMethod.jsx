import React from 'react'

const ArrayMethod = () => {
    const reverseString = (str) => {
        return str.split('').reverse().join('');
    }  
    return (
        <div>
            <p>{reverseString("malka")}</p>
        </div>
    )
}

export default ArrayMethod
