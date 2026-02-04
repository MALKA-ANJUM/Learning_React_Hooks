import React, { useState } from 'react'

const Intreview = () => {
    const [count, setCount] = useState(0);
    const users = [
        { id: 1, name: "Ali", age: 22 },
        { id: 2, name: "Sara", age: 30 },
        { id: 3, name: "John", age: 18 },
        { id: 4, name: "Ayesha", age: 25 }
    ];

    const usersName = ["Ali", "Sara", "John"];

    return (
        <div>
            
            

            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>

            <ul>
                {users
                    .filter(user => user.age > 21)
                    .sort((a,b) => a.age - b.age)
                    .map(user => 
                    <li key={user.id}>{user.name}</li>
                )}
            </ul>
            <hr />

            <ul>
                {usersName.map((user, index) => {
                    return <li key={index}>{user}</li>
                })}

                {usersName.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>

            <hr />
        </div>
    )
}

export default Intreview
