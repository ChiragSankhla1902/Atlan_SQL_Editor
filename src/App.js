import React,{useState} from 'react'
import './App.css';
import SideBar from './Component/SideBar/sideBar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import BasicTable from './Component/BaseTable/BaseTable'
import Tabs from "./Component/Tabs/Tabs"


function App() {
  const [ActiveTable,setActiveTable]=useState(0)
  const TableName=['Customer','Order','Category','Shippers']
   const queries = [
    "select * from customers",
    "select * from orders",
    "select * from categories",
    "select * from shipper",
    "select * from customer where shipCountry==France"
  
  ];
  

  return (
  <>
    <div className='App'>
    
      <Grid container ml='2%' direction='column'>
        <Grid item lg={12} md={12}>
          <SideBar setActiveTable={setActiveTable}/>
        </Grid>
        <br/>
        <br/>
        <Grid item>
          <Typography variant='h3'> Dataset of {TableName[ActiveTable]}</Typography>
        </Grid>
        <br/>
        <br/>
        <Grid item lg={12} md={12} sm={4}>
          <BasicTable query1={queries[ActiveTable]} />
        </Grid>
        <br/>
        <br/>
        <Grid item lg={10} md={10} sm={4} >
          <Tabs defaultQuery={queries[ActiveTable]}/>
        </Grid>
      </Grid>


    </div>

    
  </> 
    
  );
}

export default App;


