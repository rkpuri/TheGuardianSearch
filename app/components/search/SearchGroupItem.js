import React, {Component} from 'react'
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox'

import { getFormattedDate } from '../../utils'
import { addToPinBar, removeFromPinBar } from '../../redux/pinbar/actions'


class SearchGroupItem extends Component {
  
  constructor() {
    super()
    this.handleAddToPin = this.handleAddToPin.bind(this)
  }
  
  handleAddToPin (evt) {
    this.props.addToPinBar(this.props.item)
  }
  
  render () {
    const { item } = this.props;

    return (
      <Grid item xs={12} sm={3} >
        <Card>
          <CardContent>
            <Typography component="p" color="textSecondary">
              Title
            </Typography>
            <Typography variant="title">
              {item.webTitle}
            </Typography>
            <Typography component="p" color="textSecondary">
              Publication date: {getFormattedDate(item.webPublicationDate)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" href={item.webUrl} target="_blank">Link</Button>
            <Button variant="outlined" onClick={this.handleAddToPin}>Pin me</Button>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
	return({
		addToPinBar: (item) => dispatch(addToPinBar(item)),
    removeFromPinBar: (id) => dispatch(removeFromPinBar(id))
	})
}

export default connect(null, mapDispatchToProps)(SearchGroupItem)
