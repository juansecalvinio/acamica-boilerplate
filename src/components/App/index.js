import React, { Component } from 'react'

import './index.css'
import Hero from '../Hero'
import Filters from '../Filters';
import Hotels from '../Hotels';

import dayjs from 'dayjs';

const API = 'https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica';

class App extends Component {
  constructor() {
    super();

    this.state = {
      hotels: [],
      backupHotels: [],
      isLoading: false,
      filters: {
        dateFrom: new Date(),
        dateTo: new Date(Date().valueOf() + 86400000),
        country: '',
        price: 0,
        rooms: 0
      }
    }
  }

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const response = await fetch(API);
      const hotels = await response.json();
      this.setState({ 
        hotels,
        backupHotels: hotels
      });
    } catch(error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }   
  }

  handleFilterChange = (payload, name) => {
    this.setState({
      filters: payload
    });

    if(payload[name] !== '') {
      const hotels = this.state.backupHotels.filter(hotel => {
        console.log(hotel[name])
        return hotel[name] == payload[name];
      });  
      this.setState({ hotels });
    } else {
      this.setState({ hotels: this.state.backupHotels });
    }
  }

  // handleFormatDate = (timestamp) => {
  //   //
  // }

  render() {
    const { hotels, isLoading, filters } = this.state;
    return (
      <div>
        <Hero dateFrom={ filters.dateFrom.toDateString() } dateTo={filters.dateTo.toDateString()} />
        <Filters filters={ filters } onFilterChange={this.handleFilterChange} />
        { hotels.length > 0 && <Hotels data={ hotels }/> }
      </div>
    )
  }
}

export default App;


/*

TO-DO list
-----------
- Usar la API de Hoteles (OK)
- Crear los componentes hijos para optimizar el componente Hotel
- Desarrollar los métodos para filtrar los hoteles con los filters

*/

//const optionsDate = {
//   locale: Intl.DateTimeFormat().resolvedOptions().locale,
//   options: {
//     timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
//     weekday: 'long', 
//     year: 'numeric', 
//     month: 'long',
//     day: 'numeric'
//   }
// }

// const today = new Date();

//const filters = {
//  dateFrom: today,
//  dateTo: new Date(today.valueOf() + 86400000),
//  country: 'Argentina',
//  price: 0,
//  rooms: 0
//}