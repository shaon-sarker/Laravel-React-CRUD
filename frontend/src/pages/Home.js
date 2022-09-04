import React, { useState,useEffect } from 'react';
import http from "../http"
import { Link } from "react-router-dom";

function Home() {

    //Fetch all data from database
    const[users,setUsers] = useState([]);
    useEffect(()=>{
        fetchAllUsers();
    },[]);

    const fetchAllUsers = () => {
        http.get('/users').then(res=>{
            setUsers(res.data);
        })
    }
      //Fetch all data from database end

    //Delete user part
    const deleteUser = (id) => {
        http.delete('/users/'+id).then(res=>{
            fetchAllUsers();
        })
    }
     //Delete user part end

    return ( 
        <>
        <h2>User List</h2>
        <table className="table">
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((user,index)=>(
                    <tr key={user.id}>
                        <td>{++index}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.created_at}</td>
                        <td>
                            <Link className="btn btn-info btn-sm" to={{ pathname: "/edit/" + user.id }}>Edit</Link>
                            <Link className="btn btn-primary btn-sm" to={{ pathname: "/view/" + user.id }}>View</Link>
                            <button type='button' className="btn btn-danger btn-sm" onClick={()=>{deleteUser(user.id)}}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
     );
}

export default Home;