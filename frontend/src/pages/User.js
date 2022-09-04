import React from 'react';
import { useNavigate } from "react-router-dom";
import http from '../http'
import { useState } from "react";

function User() {
    const navigate = useNavigate();// kon jayga submit howa por jabe seta import korse iekhne
    const [inputs,setInputs] = useState({}); // state ke dhorar jonno

    //input value ke dhore change korar jonno kora hoise
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
    //input value ke dhore change korar jonno kora hoise ei pojonto
    
    //API r madome post kora hoise
    const submitForm = () =>{
        http.post('/users',inputs).then((res)=>{
            navigate('/'); //kon jayga submit howa por jabe seta eikhne bola hoise
        })
        // console.log(inputs);
    }
    return ( 
        <>
            <h2>New User</h2>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control mb-2"
                                value={inputs.name || ''}
                                onChange={handleChange}
                             />

                        <label>Email</label>
                        <input type="email" name="email" className="form-control mb-2"
                            value={inputs.email || ''}
                            onChange={handleChange}
                        />

                        <label>Password</label>
                        <input type="password" name="password" className="form-control mb-2"
                            value={inputs.password || ''}
                            onChange={handleChange}
                             />

                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Create</button>
                    </div>
                </div>
            </div>
        </>
     );
}

export default User;