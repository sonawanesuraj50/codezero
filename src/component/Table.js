import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 250,
  },
});

function Tabledata() {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(async () => {
        const result = await axios(
            'http://dummy.restapiexample.com/api/v1/employees',
        );
        setData(result.data.data);
    }, [data]);

  return (
        <TableContainer component={Paper} className={classes.table}>
            <Table  aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell align="right">Employee Name</TableCell>
                    <TableCell align="right">Employee Salary</TableCell>
                    <TableCell align="right">Employee Age</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {data?.map((row:any,id:number) => (
                    <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell align="right">{row.employee_name}</TableCell>
                    <TableCell align="right">{row.employee_salary}</TableCell>
                    <TableCell align="right">{row.employee_age}</TableCell>              
                    </TableRow>
                    ))
                }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Tabledata;
