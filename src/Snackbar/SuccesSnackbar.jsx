import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SuccesSnackbar(props) {
    // const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        props.setOpen(props.isOpen);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        props.setOpenValue(false);
    };

    return (
        <div>
            <Snackbar open={props.isOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
            <Alert severity="success">This is a success message!</Alert>
        </div>
    );
}