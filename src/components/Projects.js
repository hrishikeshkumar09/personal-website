import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Paper } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Projects({openProject,setOpenProject}) {

  const handleClose = () => {
    setOpenProject(false);
  };

  return (
    <div>
      <Dialog
        open={openProject}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="lg"
      >
        <DialogTitle>{"Projects"}</DialogTitle>
        <DialogContent sx={{maxWidth:1000}}>
         <a href='https://github.com/hrishikeshkumar09/AI-Enabled-Fintech-B2B-Invoice-Management-Application' target="_blank" style={{textDecoration:'none'}} >
              <Paper style={{backgroundColor:"#2f2fa2",padding:"10px",color:"white",margin:"10px auto"}} elevation={3}>
                  <h5>AI Enabled FinTech B2B Invoice Management Application (January - April 2022)</h5>
                  <p>
                  A Full Stack Invoice Management Application, where users can visualize the data in the form of grids and graphs, perform searching operation on the invoices, add and edit invoices, and delete data of selected rows. 
                  All the payment clearance date of the uncleared invoices can also be predicted.
                  Used HTML, CSS, JavaScript, ReactJS for frontend, Java and Servlets for backend, MySQL for database, Python for ML.
                  </p>
              </Paper>
          </a>

          <a href='https://calculator-currency-converter.herokuapp.com/' target="_blank" style={{textDecoration:'none'}} >
              <Paper style={{backgroundColor:"#553d67",padding:"10px",color:"white",margin:"10px auto"}} elevation={3}>
                  <h5>Easy Calculate & Convert (February 2022)</h5>
                  <p>
                    An online scientific calculator and currency converter, which makes arithmetic calculations and conversions from one currency to another, really easy.
                    Used HTML, CSS and JavaScript, and deployed the application on Heroku.
                  </p>
              </Paper>
          </a>

          <a href='https://learn-java2.herokuapp.com' target="_blank" style={{textDecoration:'none'}} >
              <Paper style={{backgroundColor:"black",padding:"10px",color:"white"}} elevation="3">
                  <h5>Learn Java (March 2021)</h5>
                  <p>A web application wherein users can learn about ‘Java’ from introduction to writing their first program in Java.
                     Used HTML and CSS for Front-End and Deployed it on Heroku.
                  </p>
              </Paper>
          </a>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}