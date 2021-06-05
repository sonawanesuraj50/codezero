import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));

function Formdata() {

    const classes = useStyles();

    const [firstName, setFirstName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [displayData, setDisplayData] = useState(false);


    const handleSubmit = e => {
        e.preventDefault();
        setDisplayData(true)
        console.log(firstName, address, email, phone);
    };

    return (
        <div className={classes.root}>
            <form className={classes.root} onSubmit={handleSubmit}>
                <TextField id="standard-basic"
                    label="Name"
                    required
                    onChange={e => setFirstName(e.target.value)}
                />
                <TextField id="standard-basic"
                    label="Email"
                    type="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField id="standard-basic"
                    label="Address"
                    required
                    onChange={e => setAddress(e.target.value)}
                />
                <TextField id="standard-basic"
                    label="Phone"
                    type="number"
                    required
                    onChange={e => setPhone(e.target.value)}
                />
                <div>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
            </Button>
                </div>
            </form>
            {displayData &&
                <>
                    <Typography>{firstName}</Typography>
                    <Typography>{email}</Typography>
                    <Typography>{address}</Typography>
                    <Typography>{phone}</Typography>
                </>
            }
        </div>
    );
}

export default Formdata;
