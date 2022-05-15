import React,{useMemo} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {queryData} from '../../data/data'


export default function BasicTable({query1}) {
  const query =query1
  var row=[]
  let data = useMemo(()=>{return(queryData.filter((element) => element.query === query))},[query])
  var col=  useMemo(()=> {return(Object.keys(data[0].result[0]))},[data[0].result[0]])
  var size= useMemo(()=>{return(data[0]?.result.length>=5?5:data[0]?.result.length)},[data[0]?.result.length])
  for(var i=0 ;i<size;i++)
  {
    row.push(Object.values(data[0].result[i]).map((customers)=>{return(customers)}))
  }


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 340 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {
              col.map((c,index)=>{
                return(
                  <TableCell key={index} align="center">{c}</TableCell>
                )
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row,index) => (
          
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            {
              Object.keys(row).map((r,index)=>{
                return(
                  <TableCell key={index} align="center">{row[r]}</TableCell>
                )
              })
            }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}