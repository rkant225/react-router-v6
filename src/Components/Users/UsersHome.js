import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const UsersHome = () => {
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    useEffect(()=>{
        const users = [
            {id : 1, name : 'Rahul', address : 'Raipur'},
            {id : 2, name : 'Ravi', address : 'Chakghat'},
            {id : 3, name : 'Amit', address : 'Rajha'},
            {id : 4, name : 'Ajay', address : 'Lucknow'},
            {id : 5, name : 'Deepak', address : 'Jalandhar'},
        ];
        setUsers(users);
    }, [])

    const handleNavigation=(user)=>{
        navigate(`/users/${user.id}`, {state : user});        
    }

    return (
        <div>
            <b>All Users</b>
            {users.map((user)=>{
                return(
                    <div key={user.id}>
                        {/* Navigation using Link */}
                        {/* {user.name} | {user.address} | <Link to={`/users/${user.id}`}>View</Link> */}

                        {/* Programeticly Navigation */}
                        {user.name} | {user.address} | <button onClick={()=>{handleNavigation(user)}}>View</button>
                    </div>
                );
            })}
        </div>
    )
}

export default UsersHome
