import React, { Component } from 'react'

import ErrorBoundary from './ErrorBoundary'
import Header from './components/header/Header'
import SearchEngine from './components/search/SearchEngine'
import PinBar from './components/pinbar/PinBar'

class App extends Component {
  render() {
 
    return (
      <ErrorBoundary>
        <Header />
        <SearchEngine />
        <PinBar />
      </ErrorBoundary>
    );
  }
}

export default App
