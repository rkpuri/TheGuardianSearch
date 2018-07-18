import React, { Component, Fragment }  from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import PinBarItems from './PinBarItems'

import './PinBar.less'

function PinBar ({ pinBarList }) {
  return (
    <Fragment>
      {pinBarList.length ? 
        <ExpansionPanel className="pinbar" defaultExpanded={true} >
          <ExpansionPanelSummary className="header" expandIcon={<ExpandMoreIcon />}>
            Pinned Items
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className="items">
            <PinBarItems list={pinBarList} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      : ''}
    </Fragment>      
  )
}

const mapStateToProps = (state) => {
  return({
    pinBarList: state.PinBarReducer.pinBarList
  })
}

export default connect(mapStateToProps)(PinBar)