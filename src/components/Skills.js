import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import './skills.css';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Skills({openSkill,setOpenSkill}) {
  const handleClose = () => {
    setOpenSkill(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openSkill} maxWidth="lg"
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          MY SKILLS
        </BootstrapDialogTitle>
        <DialogContent dividers style={{maxWidth:"1000px"}}>
          <Typography gutterBottom>
            <h5 style={{marginLeft:"15px"}}>Programming Languages</h5>
            <div className='mk'>C</div>
            <div className='mk'>C++</div>
            <div className='mk'>Java</div>
            <div className='mk'>JavaScript</div>
            <div className='mk'>Python</div>
          </Typography>
          <Typography>
            <h5 style={{marginLeft:"15px"}}>Technologies</h5>
            <span className='mk'>HTML</span>
            <span className='mk'>CSS</span>
            <span className='mk'>ReactJS</span>
            <span className='mk'>Web Development</span>
            <span className='mk'>MySQL</span>
            <span className='mk'>Servlet</span>
          </Typography>
          <Typography>
            <h5 style={{marginLeft:"15px"}}>Related Skill Set</h5>
            <span className='mk'>OOP</span>
            <span className='mk'>Data Structures and Algorithms</span>
            <span className='mk'>Computer Network</span>
            <span className='mk'>OS</span>
            <span className='mk'>DBMS</span>
            <span className='mk'>Web Technology</span>
          </Typography>
          <Typography>
            <br/>
            <h5 style={{marginLeft:"15px"}}><b>I am well acquainted to work in both Windows and Linux Environment.</b></h5>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}