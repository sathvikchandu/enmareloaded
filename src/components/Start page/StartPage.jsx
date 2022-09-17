import React from 'react'
import {useNavigate} from 'react-router-dom'

function StartPage() {
    const navigate = useNavigate()
  return (
    <div className='containerstart'>
         <div className='heading'><h1>ENMA</h1></div>
        <div className="topbar">
            
            <ul className='elecontainer'>
                <li className='listele'><h2>Home</h2></li>
                <li className='listele'><h2>About Us</h2></li>
                <li className='listele'><h2>Our Vision</h2></li>
                <li className='listele' ><h2 onClick={()=>navigate('whoru')}>Login</h2></li>
                <li className='listele'><h2>Signup</h2></li>
            </ul>
        </div>
        <div className='startmain'>

            <div className="containerbox">
                <div className="box1">
                    <h1>About Us</h1>
                    <p>Enma is a project management application which mainly focusses on the communication between the client and the company. Here the client
                        oversee the progress of the project and can suggest the changes to the company. The company can also send the updates to the client.
                    </p>
                </div>
                <br></br>
                <br></br>
                <div className="box2">
                    <h1>Our Vision</h1>
                    <p>Our vision is to make the communication between the client and the company easier and faster. We want the communication to play a key part in 
                        the  project so that the client and company has the complete satisfaction in the product to be delivered
                    </p>
                </div>
            </div>


           
        </div>
    </div>
  )
}

export default StartPage