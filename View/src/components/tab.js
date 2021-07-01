import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Questions from '../components/question';

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="vid" id="txtBox" style={{position:"relative", top:"0.5vh", left:"2vw", width:"33vw"}}>
      <AppBar position="static" style={{background:"#ffd2d9", color:"#000"}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
         <Tab label="Over View" {...a11yProps(0)} />
          <Tab label="Transcript" {...a11yProps(1)} />
          <Tab label="Quiz" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <span className="vid" id="txtBox" style={{position:"relative", top:"1vh", left:"-2vw",}}>
        <Typography variant="h6" className="subhead" style={{margin:"0.2rem"}}>Tutorial Hightlight</Typography>
        <Typography variant="body1" color="inherit" style={{margin:"0.5rem"}}>
            Learn why big data and tax avoidance are some of the biggest ethical
             issues significant benefits to businesses such as attracting employees,
             customers.benefits to businesses such as attracting.
        </Typography>

        </span>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <span id="transcriptCol">
        <Typography>
        Learn why big data and tax avoidance are some of the biggest ethical issues<br />
        facing businesses today and how they can be addressed.Ethical behaviour brings<br />
        significant benefits to businesses such as attracting employees, customers and investors.<br /> 
        But failure to manage it properly can create huge challenges.<br />
        On this course, you’ll discover big data and tax avoidance.<br />
        Learn why big data and tax avoidance are some of the biggest ethical issues<br />
        facing businesses today and how they can be addressed.Ethical behaviour brings<br />
        significant benefits to businesses such as attracting employees, customers and investors.<br /> 
        But failure to manage it properly can create huge challenges.<br />
        On this course, you’ll discover big data and tax avoidance.<br />
        </Typography>
        </span>
      </TabPanel>
      <TabPanel value={value} index={2 }>
      <Questions />
      </TabPanel>
    </div>
  );
} 