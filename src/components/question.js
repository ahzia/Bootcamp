import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function Question() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span id="transcriptCol">
        
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
            <Typography color="textSecondary">
            Good Time Management is a chrachterestics of a good manager?
             </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
        <fieldset>
            <div className="radio">
              <input type="radio" className="radio" name="options" value="True" id="TOption" />
              <label >True</label>
              <input type="radio" className="radio" name="options" value="False" id="FOption" />
              <label >False</label>
            </div>
          </fieldset>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >

            <Typography color="textSecondary">
            what are the chrachterestics of a good and successful manager?
             </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
        <fieldset>
            <div className="radio">
              <input type="radio" className="radio" name="options" value="True" id="TOption" />
              <label >True</label>
              <input type="radio" className="radio" name="options" value="False" id="FOption" />
              <label >False</label>
            </div>
          </fieldset>
        </AccordionDetails>
      </Accordion>
      

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >

            <Typography color="textSecondary">
            what are the chrachterestics of a good and successful manager?
             </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <fieldset>
            <div className="radio">
              <input type="radio" className="radio" name="options" value="True" id="TOption" />
              <label >True</label>
              <input type="radio" className="radio" name="options" value="False" id="FOption" />
              <label >False</label>
            </div>
          </fieldset>
        </AccordionDetails>
      </Accordion>
      </span>
    </div>
  
  );
}
