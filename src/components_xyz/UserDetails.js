import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const UserDetails = () => {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const filter = searchParams.get("filter");

  return (
    <>
        <div>Detail of user <b>{params.userId}</b></div>

        <br/>

        <button onClick={()=>{setSearchParams({})}}>All</button>
        <button onClick={()=>{setSearchParams({filter: "active"})}}>Active</button>
        {filter === "active" ? <h3>Active Users</h3> : <h3>All users</h3>}
    </>
  )
}

export default UserDetails