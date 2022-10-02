import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Typography from '@mui/material/Typography'
const columns = [
    {
        field: 'id', headerName: 'ID', width: 100
    },
    {
        field: 'name', headerName: 'Name', width: 200
    },
    {
        field: 'country', headerName: 'Country', width: 200
    },
    {
        field: 'age', headerName: 'Age', width: 200
    },
    {
        field: 'job', headerName: 'Job', width: 200
    }
]
const rows = [
    { id: 1, name: 'John wick1', age: 15, country: "Australia", job: "Engg" },
    { id: 2, name: 'John wick2', age: 35, country: "Australia", job: "Engg" },
    { id: 3, name: 'John wick3', age: 45, country: "Australia", job: "Engg" },
    { id: 4, name: 'John wick4', age: 55, country: "Australia", job: "Engg" },
    { id: 5, name: 'John wick5', age: 65, country: "Australia", job: "Engg" },
    { id: 6, name: 'John wick6 ', age: 75, country: "Australia", job: "Engg" },
]
const Summery = () => {
    return (
        <div style={{ height: 500, width: '80%', margin: '0 auto' }}>
            <Typography variant="h2" align="center" gutterBottom>sadasdsads</Typography>
            <DataGrid rows={rows} columns={columns}></DataGrid>
        </div>
    )
}

export default Summery