import React,{ useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import emailjs from '@emailjs/browser';
import { Paper } from '@mui/material';

export default function Contact({openContact,setOpenContact}) {
  

  const handleClose = () => {
    setOpenContact(false);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dhgyvel', 'template_wf5kaxg', form.current, 'cAnHaxb3wvoIZA66I')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

  return (
    <div>
      <Dialog open={openContact} onClose={handleClose}>
        <DialogTitle>Contact Me</DialogTitle>
        <DialogContent>
        
        <Paper style={{padding: "10px",backgroundColor:"#212529",color:'white'}}>
            <h5>Email</h5>
            <h6>hrishikeshkumar09@gmail.com</h6>
            <h5>Phone</h5>
            <h6>8486706215</h6>
        </Paper>
        
        <form ref={form} onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
                <div className="col-8 form-group mx-auto">
                    <input type="text" className="form-control" placeholder="Name" name="user_name"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="Email Address" name="user_email"/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                </div>
                <div className="col-8 pt-3 mx-auto">
                    <input type="submit" className="btn btn-info" value="Send Message"></input>
                </div>
            </div>
        </form>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}