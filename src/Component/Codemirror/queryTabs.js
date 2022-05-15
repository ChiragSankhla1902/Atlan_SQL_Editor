import ButtonGroup from "@mui/material/ButtonGroup";
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';

/**
 * The component to display the buttons in the query space.
 * @returns {JSX.Element}
 * @constructor
 */
function QueryButtons({setCount,Count}) {
  const handleCount=()=>{
    setCount(Count+1)
  }

  

  return (
    <ButtonGroup>
      <Button>{<PlayArrowIcon/>} Run</Button>
      <Button onClick={handleCount}>{<AddIcon />} New Tab</Button>
      <Button onClick={handleCount}> {<DownloadIcon/>} Export CSV </Button>
     
    </ButtonGroup>
  );
}

export default QueryButtons;