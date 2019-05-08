import React, { Component } from 'react'

class Hero extends Component {
  render() {
    const { dateFrom, dateTo } = this.props;
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hoteles</h1>
            <h2 className="subtitle">
              desde el <strong>{dateFrom}</strong> hasta el <strong>{dateTo}</strong>
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero;
