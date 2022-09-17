import React from 'react'
import client from '../../assets/client.svg'
import developer from '../../assets/developer.svg'
import manager from '../../assets/manager.svg'
import { useNavigate } from 'react-router-dom'

import Hacker from '../../assets/Hackerrank.png'
function Whoru() {
    const navigate = useNavigate()
  return (
    <>
      <div className='heading'><h1>ENMA</h1></div>
      <div className='whorucontainer'>
        <div className="leftside">
          <img src={Hacker} alt="hacker"  />
        </div>
        <div className="rightside">
          <div className="imagecontainer">
            <div className="bottle1" ><img src={client} alt="sadsad" className='icons' /><h2 onClick={()=>navigate('/clientlogin')}>Login as a Client</h2></div>
            <div className="bottle2"><img src={developer} alt="sadsad" className='icons'/><h2 onClick={()=>navigate('/devlogin')}>Login as a Developer</h2></div>
            <div className="bottle3"><img src={manager} alt="sadsad" className='icons'/><h2 onClick={()=>navigate('/managerlogin')}>Login as a Manager</h2></div>
            
          </div>
        

        </div>
        
      </div>
    </>
  )
}

export default Whoru