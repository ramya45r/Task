import {useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {rows} from '../data'
import {data} from '../data2'
import { dark } from '@mui/material/styles/createPalette';


console.log(rows,'dddddddddddddddddddd');
console.log(data?.brands,'fjjjjjjjjjjjjjjj');
export default function Category() {
    const [items,setItems]=useState(rows)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650,marginTop:10}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell  align="center">Category</TableCell>
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell  align='center'>{item.category}</TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

