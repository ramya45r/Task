
import { useState} from 'react'
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {rows} from '../data'
import {data} from '../data2'
import {useEffect} from 'react'
export default function BasicTable() {
    const [items, setItems] = useState(data);
 

 
 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650,marginTop:8}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Brand Id</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Model 1</TableCell>
            <TableCell >Model 2</TableCell>
            <TableCell >Model 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {items?.map((item, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {item.brand_id}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.model[0].model_name}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.model[1].model_name}
              </TableCell>
              <TableCell component="th" scope="row">
              {item.model[2].model_name}
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

