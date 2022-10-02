import React, { useState, useEffect, useContext } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Customer from '../components/customer'
import CustomerContext from '../context/CustomerContext'

import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'

import { styled } from '@mui/system/'

import Brightness3Icon from '@mui/icons-material/Brightness3'
import { createTheme, ThemeProvider } from '@mui/material'
import Switch from '@mui/material/Switch'
function Home() {
    const { customers } = useContext(CustomerContext);
    const [mode, setMode] = useState('dark')
    const customTheme = createTheme({
        palette: {
            mode: mode,
        }
    })
    const MyDiv = styled('div')({
        backgroundColor: 'aliceBlue',
        padding: 10,
        borderRadius: 15
    })
    const MyTypography = styled(Typography)({
        backgroundColor: '#52a388',
        padding: 10,
        color: '#fff',
        textAlign: 'center'
    })
    return (
        <ThemeProvider theme={customTheme} >
            <Container>
                <Typography variant="h2" gutterBottom align="center">
                    Add manager to customers
                </Typography>
                <MyTypography >
                    this is material ui 5
                </MyTypography>
                <Box>
                    <Box>
                        <Drawer variant="permanent" anchor="left">
                            <List>
                                <ListItem component="a" href="/create">
                                    <ListItemIcon><InboxIcon /></ListItemIcon>
                                    <ListItemText primary="Create new cutomer"></ListItemText>
                                </ListItem>
                                <ListItem component="a" href="/create">
                                    <ListItemIcon><Brightness3Icon /></ListItemIcon>
                                    <Switch onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')} />
                                    <ListItemText primary="Switch mode"></ListItemText>
                                </ListItem>
                            </List>
                        </Drawer>
                    </Box>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container p={5} spacing={5}>
                            {customers && customers.map((customer) => {
                                return (
                                    <Grid item xs={4} key={customer.id}>
                                        <MyDiv>
                                            <Customer customer={customer} />
                                        </MyDiv>
                                    </Grid>
                                )
                            })}
                        </Grid>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Home