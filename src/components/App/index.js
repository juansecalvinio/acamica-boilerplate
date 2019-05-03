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
        dateFrom: today.toLocaleDateString(optionsDate.locale, optionsDate.options),
        dateTo: new Date(today.valueOf() + 86400000).toLocaleDateString(optionsDate.locale, optionsDate.options),
        country: 'Argentina',
        price: 0,
        rooms: 0
      }
    }
  }  

  render() {
    return (
      <div>
        <Hero filters={ this.state.filters } />
        <Filters filters={ this.state.filters } />
      </div>
    )
  }
}

export default App
