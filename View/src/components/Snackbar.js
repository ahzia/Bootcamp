import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function SnackbarAlert(props) {
//default Values:
var handleClose=props.onClose;
var actionColor="primary";
var actionText="OK"
var message="Sucssefull"
var actionClick=handleClose;
if(props.actionColor!=null){
    actionColor=props.actionColor;
}
if(props.actionText!=null){
    actionText=props.actionText;
}
if(props.message!=null){
    message=props.message;
}
if(props.actionClick!=null){
    actionClick=props.actionClick;
}
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={props.successOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={
          <React.Fragment>
            <Button color={actionColor} size="small" onClick={actionClick}>
                {actionText}
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}