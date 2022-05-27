import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Certificate from './Certificate';
import Education from './Education';
import Navbar from 'react-bootstrap/Navbar';

export default function Nav() {
  const [openSkill,setOpenSkill]=React.useState(false);
  const [openProject,setOpenProject]=React.useState(false);
  const [openContact,setOpenContact]=React.useState(false);
  const [openCertificate,setOpenCertificate]=React.useState(false);
  const [openEducation,setOpenEducation]=React.useState(false);

  const handleSkill=()=>{
      setOpenSkill(true);
  }

  const handleProject=()=>{
    setOpenProject(true);
  }

  const handleContact=()=>{
    setOpenContact(true);
  }

  const handleCertificate=()=>{
    setOpenCertificate(true);
  }

  const handleEducation=()=>{
    setOpenEducation(true);
  }

  return (
    <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <button style={{color:"rgba(245, 245, 245, 0.523)",backgroundColor:"rgba(245, 245, 245, 0.523)"}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <Button color="inherit" variant='contained' sx={{margin: "5px auto",height: "40px",color:'black',backgroundColor:"white"}} onClick={handleSkill}><b>Skills</b></Button>
      <Button color="inherit" variant='outlined' sx={{margin: "5px auto",height: "40px",color:'white'}} onClick={handleEducation}>Education</Button>
      <Button color="inherit" variant='outlined' sx={{margin: "5px auto",height: "40px",color:'white'}} onClick={handleProject}>Projects</Button>
      <Button color="inherit" variant='outlined' sx={{margin: "5px auto",height: "40px",color:'white'}} onClick={handleCertificate}>Certificates</Button>
      <Button color="inherit" variant='outlined' href='https://github.com/hrishikeshkumar09' target="_blank" sx={{margin: "5px auto",height: "40px",color:'white'}}>Github</Button>
      <Button color="inherit" variant='outlined' href='https://www.linkedin.com/in/hrishikesh-k-538566110/' target="_blank" sx={{margin: "5px auto",height: "40px",color:'white'}}>Linkedin</Button>
      <Button color="inherit" variant='outlined' sx={{margin: "5px auto",height: "40px",color:'white'}} onClick={handleContact}>Contact</Button>
      <Skills openSkill={openSkill} setOpenSkill={setOpenSkill}/>
      <Projects openProject={openProject} setOpenProject={setOpenProject}/>
      <Contact openContact={openContact} setOpenContact={setOpenContact}/>
      <Certificate openCertificate={openCertificate} setOpenCertificate={setOpenCertificate}/>
      <Education openEducation={openEducation} setOpenEducation={setOpenEducation}/>
    </div>
  </div>
</nav>
  );
}