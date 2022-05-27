import React from 'react';
import { Paper } from '@mui/material';
import "./body.css";
import img1 from "../images/6.jpg"
import { Button } from '@mui/material';
import Typewriter from 'typewriter-effect';

export default function Body() {
  return (
    <div>
        <Paper elevation={3} sx={{maxWidth: "95%",margin:"10px auto 0px auto",padding:"50px 10px 50px 25px",color:"white",textAlign:"left",fontSize:"25px"}} className="body2">           
            <h2>Welcome</h2>
            <Button color="inherit" href='https://drive.google.com/file/d/1rsXhyY8hvAha_60Vms3J6hoEI7_ivIwI/view?usp=sharing' target="_blank" variant='outlined' sx={{margin: "5px 0px",height: "40px",color:"white"}}><b>Get My Resume</b></Button>
            {/* <h2>Hello, I am Hrishikesh!</h2> */}
            <Typewriter style={{fontSize: "80px"}}
            options={{
              autoStart: true,
              loop: true,
              strings: ["Hello, I am Hrishikesh!"],
            }}/>
        </Paper><br/>
        <img src={img1} className="profile"></img>
        <div className='paraDiv'>
        <p className='fontNew'>
            My name is Hrishikesh Kumar and I am a 3rd year undergraduate student at Kalinga Institute of Industrial
            Technology, Bhubaneswar in the Department of Computer Science and Engineering.<br/>
            I am a developer who loves problem solving and developing new things. I am deeply interested in Web Development (Full-Stack)
            and Data Science. I am a fast learner and always open for new challenges and opportunities within and beyond research and academia.
            <br/>
            I like travelling, reading novels, cooking different food and developing new things.
        </p>
        </div>
    </div>
  )
}
