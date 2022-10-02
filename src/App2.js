import './App.css';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Appbar from '@mui/material/Appbar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Chip } from '@mui/material';

function App2() {

  return (
    <div className="App">
      <Appbar position="relative">
        <Toolbar>
          <Typography variant="h2" align="left" sx={{ flexGrow: 6 }}>Mui-5</Typography>
          <Button variant="inherit">Login</Button>
          <Button variant="inherit">Logout</Button>
        </Toolbar>
      </Appbar>
      <div>
        <h5>sdasdsad</h5>
        <Stack direction="row" justifyContent="space-between">
          <p>sdasdasdasdasdasd</p>
          <p>sdasdasdasdassadaasdasdasd</p>
          <p>sdasdasdasdasdasadasdasdsadsadsadsdsd</p>

        </Stack>
      </div>

      <div>
        <Chip label="1hu nhat"></Chip>
        <Chip label="2hu nhat"></Chip>
        <Chip label="3hu nhat" variant="outlined"></Chip>
      </div>
      <Box>
        <Typography variant="h1" align="left" fontSize={24}>Xin chao anh chinh</Typography>
      </Box>
      <Grid container>
        <Grid item align="justify" xs={4}><Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="pannel1-content" id="pannl1-header">
            <Typography variant="h4">
              Chinh nguyen casdasdasdas
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="p">
              Chinh nguyen casdasdasdasdasdasdasdasda
            </Typography>

          </AccordionDetails>
        </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="pannel2-content" id="panel2-header">
              <Typography variant="h4">
                Chinh nguyen casdasdasdasda
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="p">
                Chinh nguyen casdasdasdasdasdasdasdasda sdas Chinh nguyen casdasdasdasdasdasdasdasdasdas
              </Typography>

            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item align="justify" xs={6}>asdasd</Grid>
        <Grid item align="justify" xs={2}>
          <FormControl>
            <FormLabel>
              Which famwork would you like use?
            </FormLabel>
            <RadioGroup row defaultValue="laravel" name="radio-btn">
              <FormControlLabel value="boostrap" control={<Radio />} label="Boostrap"></FormControlLabel>
              <FormControlLabel value="laravel" control={<Radio />} label="laravel"></FormControlLabel>
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Stack direction="row" spacing={1} paddingTop={15} paddingLeft={75}>
        <Button variant="text">Clieck</Button>
        <Button variant="contained">Submit</Button>
        <Button variant="outlined">Sign Up</Button>
        <Button disabled >Disable</Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
        <Button variant="outlined" startIcon={<SendIcon />}>Send</Button>
      </Stack>
    </div >
  );
}

export default App2;
