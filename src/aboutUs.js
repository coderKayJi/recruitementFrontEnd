import { Button } from 'antd'
import React from 'react'

const AboutUs = () => {
  
    const contact =()=>{
        window.location.href='/apply'
    }
    return (
            <div>
                <h3 style={{ color: 'white' }}>This is the Recruitement Portal to start your career !</h3>
                <p>I had build a webpage where you will be applying for various posts and answering all the questions related to job description.</p>
                <p> Show your skill and innovations to create a difference among other applications.</p>
                <p>This is the most important part of this test.</p>
                <p >Please Review my code and provide feedback .</p>
                <Button onClick={contact}>View Openings</Button>
            </div> 
    )
}

export default AboutUs