import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { removeFromPinBar } from '../../redux/pinbar/actions'

import './PinBarItems.less'

class PinBarItems extends Component {
  
  constructor () {
    super()
    this.removeItem = this.removeItem.bind(this)
    
  }
  removeItem (id) {
    console.log("id",id)
    this.props.removeFromPinBar(id)
  }
  
  render() {  
    const { list } = this.props

    return list.map(item => (
       <Slide key={item.id} direction="up" in={true} mountOnEnter unmountOnExit>
         <Paper elevation={4} className="item">
           <div onClick={() => this.removeItem(item.id)} className="remove-btn">
             <span>X</span>
            </div>
           <div>
             <Typography component="p" >
                {item.webTitle}
              </Typography>
             <Button variant="outlined" size="small" target="_blank" href={item.webUrl}>
                Link
             </Button>
          </div>
         </Paper>
       </Slide>
     )
    )
  }
}

PinBarItems.propTypes = {
  list: PropTypes.array
}

const mapDispatchToProps = (dispatch) => {
	return({
    removeFromPinBar: (id) => dispatch(removeFromPinBar(id))
	})
}

export default connect(null, mapDispatchToProps)(PinBarItems)