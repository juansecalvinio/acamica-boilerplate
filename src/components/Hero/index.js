import React, { Component } from 'react'

const Hero = props => {

  const { filters } = props; 

  return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hoteles</h1>
            <h2 className="subtitle">
              desde el <strong>{filters.dateFrom}</strong> hasta el <strong>{filters.dateTo}</strong>
            </h2>
          </div>
        </div>
      </section>
    )
    
}

export default Hero;
