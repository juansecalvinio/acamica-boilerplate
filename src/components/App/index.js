import React, { Component } from 'react';

import './index.css';
import Hero from '../Hero';
import Filters from '../Filters';
import Hotels from '../Hotels';

import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

const API = 'https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica';

class App extends Component {
  constructor() {
    super();

    this.state = {
      hotels: [],
      backupHotels: [],
      filters: {
        dateFrom: dayjs(),
        dateTo: dayjs(),
        country: '',
        price: 0,
        rooms: 0
      }
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch(API);
      const hotels = await response.json();
      this.setState({ 
        hotels,
        backupHotels: hotels
      });
    } catch(error) {
      console.error(error);
    } 
  }

  //handleFilterChange = filters => this.setState({ filters });

  handleFilterChange = (newFilters, name) => {
    const { backupHotels } = this.state;
    this.setState({ filters: newFilters });
    console.log(newFilters);
    if(name === 'country' || name === 'price') {
      const hotels = backupHotels.filter(hotel => {
        return hotel[name] === newFilters[name];
      });
      this.setState({ hotels });
    } else if(name === 'rooms') {
      const hotels = backupHotels.filter(hotel => {
        return hotel[name] < newFilters[name];
      });
      this.setState({ hotels });
    } else {
      this.setState({ hotels: backupHotels });
    }
  }

  render() {
    const { hotels, filters } = this.state;
    console.log(hotels);
    return (
      <div>
        <Hero filters={ filters } />
        <Filters filters={ filters } onFilterChange={this.handleFilterChange} />
        <Hotels data={ hotels }/>
      </div>
    )
  }
}

export default App;


/*

TO-DO list
-----------
- Crear los componentes hijos para optimizar el componente Hotel
- Desarrollar los métodos para filtrar los hoteles con los filters

*/
