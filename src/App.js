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
          <Typography variant='h3' fontSize='2rem'> Dataset of {TableName[ActiveTable]}</Typography>
        </Grid>
        <br/>
        <br/>
        <Grid item lg={10} md={10} ml={2} mr={4} sm={4}>
          <div ><BasicTable query1={queries[ActiveTable]} /> </div>
        </Grid>
        <br/>
        <br/>
        <Grid item lg={10} md={10} sm={4} >
          <div style={{backgroundColor:'#f4f4fa'}}>
          <div style={{textAlign:'center'}}><h1>Query Arena</h1></div>
          <Tabs defaultQuery={queries[ActiveTable]}/>
          </div>
        </Grid>
      </Grid>


    </div>

    
  </> 
    
  );
}

export default App;


