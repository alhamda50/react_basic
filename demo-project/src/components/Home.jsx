import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Home = () => {
    const rows = [
        {
            empID: 1,
            name: "John Doe",
            dept: "Marketing",
            location: "finland"
        },
        {
            empID: 2,
            name: "Jane Smith",
            dept: "Sales",
            location: "London"
        },
        {
            empID: 3,
            name: "Susan Lee",
            dept: "IT",
            location: "San Fransisco"
        }
    ]
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>empID</TableCell>
                        <TableCell align="center">name</TableCell>
                        <TableCell align="center">dept</TableCell>
                        <TableCell align="center">location</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.empID}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.empID}
                            </TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.dept}</TableCell>
                            <TableCell align="center">{row.location}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Home