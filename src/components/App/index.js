import React, { Component } from 'react'

import './index.css'
import Hero from '../Hero'
import Filters from '../Filters';
import Hotels from '../Hotels';
import hotelsData from '../../scripts/data';

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
      },
      hotels: hotelsData
    }
  }

  handleFilterChange = payload => {
    console.log(payload);
    this.setState({
      filters: payload
    })
  }

  render() {
    return (
      <div>
        <Hero filters={ this.state.filters } />
        <Filters filters={ this.state.filters } onFilterChange={this.handleFilterChange} />
        <Hotels data={ this.state.hotels }/>
      </div>
    )
  }
}

export default App


/*

TO-DO list
-----------
- Usar la API de Hoteles
- Crear los componentes hijos para optimizar el componente Hotel
- Desarrollar los métodos para filtrar los hoteles con los filters

*/