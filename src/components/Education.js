import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(degree,college, completion, grade) {
  return { degree,college, completion, grade };
}

const rows = [
  createData('B.Tech, Computer Science and Engineering','Kalinga Institute of Industrial Technology','2019-Present','9.56 CGPA'),
  createData('Senior Secondary','Concept Jr College, Nagaon', '2019', '87.4 %'),
  createData('High School', 'Christ Jyoti School, Nagaon', '2017', '92 %'),
];


export default function Education({openEducation,setOpenEducation}) {

  const handleClose = () => {
    setOpenEducation(false);
  };

  return (
    <div>
      <Dialog
        open={openEducation}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">
          {"Education"}
        </DialogTitle>
        <DialogContent style={{maxWidth: "1000px"}}>
        <TableContainer component={Paper} style={{backgroundColor:"#212529"}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell style={{color:"white",fontSize: "17px"}}>Degree</TableCell>
                    <TableCell align="right" style={{color:"white",fontSize: "17px"}}>Institute</TableCell>
                    <TableCell align="right" style={{color:"white",fontSize: "17px"}}>Year of Passing</TableCell>
                    <TableCell align="right" style={{color:"white",fontSize: "17px"}}>Percentage/CGPA</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row" style={{color:"white"}}>
                        {row.degree}
                    </TableCell>
                    <TableCell align="right" style={{color:"white",fontSize:"15px"}}>{row.college}</TableCell>
                    <TableCell align="right" style={{color:"white",fontSize:"15px"}}>{row.completion}</TableCell>
                    <TableCell align="right" style={{color:"white",fontSize:"15px"}}>{row.grade}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
    </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}