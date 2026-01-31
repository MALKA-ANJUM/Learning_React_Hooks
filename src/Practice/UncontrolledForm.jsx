import React, { useRef } from 'react'

const UncontrolledForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);        
    }
    return (
        <div className='card'>
            <div className="card-body">
                <h3>Uncontrolled Form</h3>

                <form onSubmit={handleSubmit}>
                    <input type="text"
                        ref={nameRef}
                        className='form-control mt-2'
                        placeholder='Enter Name' />

                    <input type="email"
                        ref={emailRef}
                        className='form-control mt-2'
                        placeholder='Enter Name' />
                    
                    <button className='btn btn-info mt-2 text-white'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UncontrolledForm
