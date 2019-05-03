import React, { Component } from 'react'

import './index.css'
import Hero from '../Hero'
import Filters from '../Filters';

class App extends Component {
  constructor() {
    super();

    const optionsDate = {
      locale: Intl.DateTimeFormat().resolvedOptions().locale,
      options: {
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        weekday: 'long', 
        year: 'numeric', 
        month: 'long',
        day: 'numeric'
      }
    }
  
    const today = new Date();

    this.state = {
      filters: {
        dateFormatFrom: today.toLocaleDateString(optionsDate.locale, optionsDate.options),
        dateFormatTo: new Date(today.valueOf() + 86400000).toLocaleDateString(optionsDate.locale, optionsDate.options),
        dateFrom: today,
        dateTo: new Date(today.valueOf() + 86400000),
        country: 'Argentina',
        price: 0,
        rooms: 0
      }
    }
  }

  handleFilterChange = payload => {
    this.setState({
      filters: payload
    })
  }

  render() {
    return (
      <div>
        <Hero filters={ this.state.filters } />
        <Filters filters={ this.state.filters } onFilterChange={this.handleFilterChange} />
      </div>
    )
  }
}

export default App
