import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
  return (
    <div>
        About
        <br/>
        <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>

  )
}

export default About