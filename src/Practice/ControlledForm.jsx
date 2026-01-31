import React, { useState } from 'react'

const ControlledForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email);
    }

    return (
        <div className='card'>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <h3>Controllled Form</h3>
                    <input type="text"
                        placeholder='Enter Name'
                        name='name'
                        value={name}
                        className='form-control mt-2'
                        onChange={(e) => setName(e.target.value)} />

                    <input type="email"
                        placeholder='Enter Email'
                        name='email'
                        value={email}
                        className='form-control mt-2'
                        onChange={(e) => setEmail(e.target.value)} />

                    <button className="btn btn-primary mt-2">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ControlledForm
