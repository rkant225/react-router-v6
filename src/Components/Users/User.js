import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';

const User = () => {
    const [user, setUser] = useState({});
    const {userId} = useParams();
    const location = useLocation();


    useEffect(()=>{
        executeMe();
    },[])

    const executeMe = ()=>{
        console.log('Hi..')
    }


    useEffect(()=>{
        const users = [
            {id : 1, name : 'Rahul', address : 'Raipur'},
            {id : 2, name : 'Ravi', address : 'Chakghat'},
            {id : 3, name : 'Amit', address : 'Rajha'},
            {id : 4, name : 'Ajay', address : 'Lucknow'},
            {id : 5, name : 'Deepak', address : 'Jalandhar'},
        ];

        const user = users.find((user)=> userId == user.id);
        setUser(user);
    }, [userId]);


    return (
        <div>
            <b>{user?.name} </b> | {user?.address} | <Link to={`/users`} state={user}>All Users</Link>
        </div>
    )
}

export default User;
