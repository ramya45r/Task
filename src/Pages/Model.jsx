import {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {model} from '../data2'


export default function BasicTable() {
    const [items,setItems]=useState(model)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650,marginTop:8 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Model</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.model}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
             
              <TableCell>{item.model_id}</TableCell>
              <TableCell component="th" scope="row">
                {item.model_name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
