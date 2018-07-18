import React, { Component } from 'react'
import axios from 'axios'

import SearchBar from './SearchBar'
import SearchResultList from './SearchResultList'
import Search from './Search'
import MessageComponent from '../message/MessageComponent'

import './SearchEngine.less'

class SearchEngine extends Component {
  constructor() {
    super()
    this.state = {
      result: [],
      error: undefined
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }
  
  handleSearchChange (event) {
    
    const target = event.target;
    const value = target.value;
    
    Search(value)
    .then(response => {
      if (response.results.length) {
        this.setState({
          result: response.results,
          error: undefined
        })
      } else  {
        this.setState({
          error: "Item not found!",
          result: []
        })
      }
    }).catch(error => {
      this.setState({
        error: error.message,
        result: []
      })
    })
    
  }
  
  render() {
    return (
      <div className="search-container">
        <SearchBar handleSearch={this.handleSearchChange} />
        {this.state.result.length > 0 ?
          <SearchResultList resultList={this.state.result} />
        : <MessageComponent message={this.state.error} /> }
      </div>
    )
  }
}

export default SearchEngine
