import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ErrorSnackbar(props) {

    const handleClick = () => {
        props.setOpenError(props.isOpen);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        props.setOpenError(false);
    };

    return (
        <div>
            <Snackbar open={props.isOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Check the correctness of the entered data or try again later
                </Alert>
            </Snackbar>
            {/*<Alert severity="success">This is a success message!</Alert>*/}
        </div>
    );
}