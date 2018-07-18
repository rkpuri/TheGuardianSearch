import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SearchGroup from './SearchGroup'

class SearchResultList extends Component
{
  constructor() {
    super()
    this.getAllSections = this.getAllSections.bind(this)
  }
  
  getAllSections (resultList) {
    return resultList.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj["sectionName"]).indexOf(obj["sectionName"]) === pos;
    });
  }
  
  render() {
    const { resultList } = this.props
    let list = this.getAllSections(resultList)
    
    return (
      <div>
      {list.map(mapObj => {
         return(
           <SearchGroup key={mapObj.sectionId} sectionName={mapObj.sectionName} resultList={resultList} />
         )
      })}
      </div>
    )
  }
}

SearchResultList.propTypes = {
  resultList: PropTypes.array
}

export default SearchResultList