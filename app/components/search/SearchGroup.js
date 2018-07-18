import React from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

import SearchGroupItem from './SearchGroupItem'

import './SearchGroup.less'

function SearchGroup (props) {

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className="heading">{props.sectionName}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className="gridContainer">
          <Grid container spacing={16} >
            {props.resultList.map(mapObj => {
              if (mapObj.sectionName === props.sectionName) {
                return (
                  <SearchGroupItem 
                    key={mapObj.id} 
                    item={mapObj}
                  >
                  </SearchGroupItem>)
              }
             })}
          </Grid>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default SearchGroup
