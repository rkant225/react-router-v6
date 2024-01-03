import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const Users = () => {
    const navigate = useNavigate();

    const USERS = [
        {id: "1", name: "User1"},
        {id: "2", name: "User2"},
        {id: "3", name: "User3"},
    ];
  return (
    <div>
        Users List
        <br/>
        {USERS.map((user)=>{
            return <div className='div-button' key={user.id} onClick={()=>{navigate(user.id)}}>{user.name}</div>
        })}
        <div className='div-button' onClick={()=>{navigate("admin")}}>Admin</div>

        <Outlet/>
    </div>
  )
}

export default Users