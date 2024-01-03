import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoMatch = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1 style={{color: "red"}}>Page Not Found !!!</h1>
        <br/>
        <button onClick={()=>{navigate(-1)}}>Go Back</button>
    </div>
  )
}

export default NoMatch