import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import {Link} from 'react-router-dom';

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function Finish({finish, moves, handleRestart}) {
  return (
    <div>
      <Dialog
        open={finish}
        disableBackdropClick
        disableEscapeKeyDown
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Well done!
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You've matched them all in {moves} moves!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestart} className="btn btn-primary custom-bg">
            RESTART
          </Button>
          <Link to="/" className="btn btn-primary custom-bg">HOME</Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
