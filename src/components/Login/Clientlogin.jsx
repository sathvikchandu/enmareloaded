import React from 'react'
import login from '../../assets/login.jpg'

function Clientlogin() {
  return (
    <div className='container mt-3'>
      <div className="row">
        <div className="col-md-5">
          Signup
        </div>
        <div className="col-mid-7">
          <img className='img-fluid w-100' src={login} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Clientlogin