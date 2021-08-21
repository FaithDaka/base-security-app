import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// eslint-disable-next-line react/prop-types
const AlertDialog = ({ title, open, Yes, No }) => {


  return (
    <div>
      <Dialog
        open={open}
        onClose={No}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"
        style={{textTransform:'uppercase'}}>Delete {title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this {title}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={Yes} style={{fontWeight:'600', color:'blue'}}>
            Yes
          </Button>
          <Button onClick={No} style={{fontWeight:'600', color:'blue', outline:'0.2px solid #aaa '}} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;

