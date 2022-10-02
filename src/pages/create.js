import React, { useContext, useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import SendIcon from '@mui/icons-material/Send'
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Chip } from '@mui/material';
import CustomerContext from '../context/CustomerContext'
import Rating from '@mui/material/Rating';

import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
function Create() {
    const { createCustomer } = useContext(CustomerContext);
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [detailsError, setDetailsError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [gender, setGender] = useState('male');
    const [rating, setRating] = useState(5);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && details) {
            createCustomer({ name, details, gender, rating });
            setOpenSnackbar(true);
        }
        if (name === "") {
            setNameError(true)
        }
        if (details === "") {
            setDetailsError(true)
        }
    }
    const handleClose = () => {
        setOpenSnackbar(false)
    }
    return (
        <Container>
            <Typography variant="h3">Create new Customers</Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Box pb={2}>
                    <TextField label="Customer Name" varient="standard" fullWidth required onChange={(e) => setName(e.target.value)} error={nameError} />
                    <TextField label="Details Name" varient="standard" fullWidth required multiline rows={3} onChange={(e) => setDetails(e.target.value)} error={detailsError} />
                    <RadioGroup row value={gender} onChange={(e) => setGender(e.target.value)}>
                        <FormControlLabel value="male" control={<Radio />} label="Male"></FormControlLabel>
                        <FormControlLabel value="famale" control={<Radio />} label="Famale"></FormControlLabel>
                        <FormControlLabel value="others" control={<Radio />} label="Others"></FormControlLabel>
                    </RadioGroup>
                    <Rating value={rating} onChange={(e) => setRating(~~e.target.value)}></Rating>
                </Box>
                <Button type="submit" variant="contained" startIcon={<SendIcon />}>Submit</Button>
            </form>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={1500}
                onClose={handleClose}
            >
                <MuiAlert onClose={handleClose} severity="success">Create a new customer</MuiAlert>

            </Snackbar>
        </Container>
    )
}

export default Create