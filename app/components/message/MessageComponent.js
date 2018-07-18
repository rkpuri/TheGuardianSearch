import React from 'react'
import PropTypes from 'prop-types'

import './MessageComponent.less'

function MessageComponent (props) {
  return( <p className="message" >{props.message}</p> )
}

MessageComponent.propTypes = {
  message: PropTypes.string
}

MessageComponent.defaultProps = {
  message: 'Please type above in search bar to search!!!'
}

export default MessageComponent
