import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'
import CustomerContext from '../context/CustomerContext'
import React, { useContext } from 'react'
import CustomerModal from '../components/CustomerModer'
import { Avatar } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'

import Checkbox from '@mui/material/Checkbox'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined'
const Customer = ({ customer }) => {
    const { DeleteCustomer } = useContext(CustomerContext);
    const stringAvatar = (name) => {
        console.log(name.split(' ')[0][0])
        return {
            children: `${name.split(' ')[0][0] + '' + name.split(' ')[1][0]}`
        }
    }
    return (
        <Card>
            <Avatar {...stringAvatar(customer.name)} sx={{ bgColor: 'green' }} />
            <CardHeader title={customer.name}
                action={
                    <Tooltip title='Delete Customer' placement='bottom-end'>
                        <IconButton onClick={() => DeleteCustomer(customer.id)}>
                            <DeleteIcon></DeleteIcon>
                        </IconButton>
                    </Tooltip>
                }>

            </CardHeader>
            <CardContent>
                <Typography paragraph align="justify">
                    {customer.details}
                </Typography>
                <CustomerModal customer={customer} />
                <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite sx={{ color: 'pink' }} />} />
                <Checkbox
                    icon={<ThumbDownOutlinedIcon />}
                    checkedIcon={<ThumbDownIcon sx={{ color: 'blue' }} />} />
            </CardContent>
        </Card>
    )
}

export default Customer