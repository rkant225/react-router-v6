import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
    const navigate = useNavigate();

    const tryToNavigate = ()=>{
        navigate("/about")
    }
  return (
    <div>
        Your Order is good now!!!
        <br/>
        <button onClick={()=>{tryToNavigate()}}>Place Order (About)</button>
    </div>
  )
}

export default OrderSummary