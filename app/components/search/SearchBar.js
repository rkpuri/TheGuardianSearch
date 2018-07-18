import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField';

import './SearchBar.less'

function SearchBar (props) {
  return (
    <div className="search-bar">
       <TextField
        id="search"
        label="Search field"
        type="search"
        className="inputField"
        margin="normal"
        onChange={props.handleSearch}
      />
    </div>
  )
}
SearchBar.propTypes = {
  handleSearch: PropTypes.func
}
export default SearchBar
