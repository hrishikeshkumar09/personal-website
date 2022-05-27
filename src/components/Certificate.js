import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import cer1 from "../images/cer1.jpg";
import cer2 from "../images/cer2.jpeg";
import cer3 from "../images/cer3.jpeg";
import cer4 from "../images/cer4.jpeg";
import cer5 from "../images/cer5.jpg";
import "./certificate.css";

export default function Certificate({openCertificate,setOpenCertificate}) {
  const handleClose = () => {
    setOpenCertificate(false);
  };

  return (
    <div>
      <Dialog open={openCertificate} onClose={handleClose} maxWidth="lg">
        <DialogTitle>Certifications</DialogTitle>
        <DialogContent style={{maxWidth: "1020px"}}>
        
        <div class="card" style={{width: "18rem"}}>
            <img src='https://i.imgur.com/eVZWqaP.jpg' class="card-img-top" alt="Problem Solving Basic" height={180}/>
            <div class="card-body">
                <h5 class="card-title">Problem Solving Basic</h5>
                <p class="card-text">It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching).</p>
                <a href="https://www.hackerrank.com/certificates/77216d74463f" target="_blank" class="btn btn-primary">View</a>
            </div>
        </div>

        <div class="card" style={{width: "310px"}}>
            <img src='https://i.imgur.com/Ax7gNn9.jpg' class="card-img-top" alt="Problem Solving Intermediate" height={180}/>
            <div class="card-body">
                <h5 class="card-title">Problem Solving Intermediate</h5>
                <p class="card-text">It covers topics of Data Structures (such as HashMaps, Stacks and Queues) and Algorithms (such as Optimal Solutions).</p>
                <a href="https://www.hackerrank.com/certificates/9e5e3c79b082" target="_blank" class="btn btn-primary">View</a>
            </div>
        </div>

        <div class="card" style={{width: "18rem"}}>
            <img src='https://i.imgur.com/sGFscro.jpg' class="card-img-top" alt="Java Certification" height={180}/>
            <div class="card-body">
                <h5 class="card-title">Java Certification</h5>
                <p class="card-text">Training completion certificate for problem solving and programming with Java issued by CAAS department of KIIT.</p>
                <a href="https://drive.google.com/file/d/1yO4eMCAgKikA6FUFmH8_GN9KGM55mZtT/view?usp=sharing" target="_blank" class="btn btn-primary">View</a>
            </div>
        </div>

        <div class="card" style={{width: "18rem"}}>
            <img src='https://i.imgur.com/6XnZBEj.jpg' class="card-img-top" alt="SQL Basic" height={180}/>
            <div class="card-body">
                <h5 class="card-title">SQL Basic</h5>
                <p class="card-text">It includes simple queries, relationships, and aggregators, issued by HackerRank.</p>
                <a href="https://www.hackerrank.com/certificates/d87f6682886b" target="_blank" class="btn btn-primary">View</a>
            </div>
        </div>

        <div class="card" style={{width: "310px"}}>
            <img src='https://i.imgur.com/mfkLSoC.jpg' class="card-img-top" alt="Data Analysis with Python" height={180}/>
            <div class="card-body">
                <h5 class="card-title">Data Analysis with Python</h5>
                <p class="card-text">Certified for completing the training and project on Data Analysis with Python: Zero to Pandas from Jovian.</p>
                <a href="https://jovian.ai/certificate/MFQTMOBWGA" target="_blank" class="btn btn-primary">View</a>
            </div>
        </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}