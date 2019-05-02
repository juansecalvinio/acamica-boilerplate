import React from 'react'

import './index.css'
import Hero from '../Hero'
import Filters from '../Filters';

function App() {

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

  const filters = {
    dateFrom: today.toLocaleDateString(optionsDate.locale, optionsDate.options),
    dateTo: new Date(today.valueOf() + 86400000).toLocaleDateString(optionsDate.locale, optionsDate.options),
    country: 'Argentina',
    price: 0,
    rooms: 0
  }

  return (
    <div>
      <Hero filters={ filters } />
      <Filters filters={ filters } />
    </div>
  )
}

export default App
