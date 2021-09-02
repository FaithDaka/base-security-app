import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// eslint-disable-next-line react/prop-types
const AlertDialog = ({ open, Yes, No }) => {

  return (
    <div>
      <Dialog
        open={open}
        onClose={No}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div style={{padding:'18px'}}>
        <DialogTitle id="alert-dialog-title"
        style={{textAlign:'center', fontWeight:'800'}}>
          <div style={{textAlign:'center', borderRadius:'100%', padding:'15px', color:'orange', width:'38%', 
          fontWeight:'800', fontSize:'45px', border:'2px solid orange', marginLeft:'32%', marginBottom:'5px'}}>!</div>
          Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {'You wont be able to reverse this action!'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={Yes} style={{fontWeight:'600', backgroundColor: 'rgb(52, 195, 143)', outline:'none', color:'#fff'}}>
            Yes, delete
          </Button>
          <Button onClick={No} style={{fontWeight:'600', backgroundColor: 'rgb(244, 106, 106)', outline:'none', color:'#fff'}} autoFocus>
            Cancel
          </Button>
        </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}

export default AlertDialog;

