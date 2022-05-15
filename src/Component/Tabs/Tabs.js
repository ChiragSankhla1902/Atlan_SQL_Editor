import  React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import QueryButtons from '../Codemirror/queryTabs';
import QuerySpace from '../Codemirror/query';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import BasicTable from '../BaseTable/BaseTable';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


export default function BasicTabs({defaultQuery}) {
  const [value, setValue] = useState(0);
  const [Count,setCount]=useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  

  const handleCancel=()=>{
    console.log(Count)
    if(Count!==0){
      setValue(Count)
      setCount(Count-1)
      
    }
    else if(Count===0)
    {
      setValue(0)
    }

  }


  useEffect(()=>{

  },[Count])

  
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home"  />
          <Tab label="Query 1" icon={ <CloseIcon onClick={handleCancel}/>} iconPosition="end"  />
          {[...Array(Count)].map((_,ind)=>{
          return(<Tab key={ind} label={`Query${ind+2}`}  icon={ <CloseIcon onClick={handleCancel}/>} iconPosition="end" />)
        })}
        </Tabs>
        <Box>{<QueryButtons setCount={setCount} Count={Count}/>}  </Box>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container>
          <Grid item lg={12} md={12}>
            {<QuerySpace defaultQuery={defaultQuery}/>}
          </Grid>
          <Grid lg={12} item >
            <h1>Result</h1>
            {<BasicTable query1={defaultQuery}/>}
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container>
          <Grid item lg={12} md={12}>
            {<QuerySpace defaultQuery={"select * from customer where shipCountry==France"}/>}
          </Grid>
          <Grid lg={12} sm={4} item>
            <h1>Result</h1>
            {<BasicTable query1={"select * from customer where shipCountry==France"}/>}
          </Grid>
        </Grid>
      </TabPanel>
      {[...Array(Count)].map((val,ind)=>{
          return(<TabPanel value={value} index={ind+2} key={ind} label={`Query${ind+2}`}>{<QuerySpace/>}</TabPanel>)
        })}
    </Box>
  );
}
