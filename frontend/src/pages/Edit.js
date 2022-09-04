import React from 'react';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'


function Edit() {
    const navigate = useNavigate();// kon jayga submit howa por jabe seta import korse iekhne
    const [inputs,setInputs] = useState({});// state ke dhorar jonno
    const {id} = useParams();

    //Fetch id by id data from database
    useEffect(()=>{
        fetchUser()
    },[]);

    const fetchUser= () =>{
        http.get('/users/'+id+'/edit').then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email,
            });
        });
    }
     //Fetch id by id data from database end

    //update korar jonno data ke dhora input field e
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }
     //update korar jonno data ke dhora input field e end part

     //Update korar jonno eta
    const submitForm = () =>{
        http.put('/users/'+id,inputs).then((res)=>{
            navigate('/');
        })
    }
    //Update korar jonno eta end
    return ( 
        <>
        <h2>Edit User</h2>
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

                        <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Edit;