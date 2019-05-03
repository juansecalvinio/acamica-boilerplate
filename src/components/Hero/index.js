import React, { Component } from 'react'

class Hero extends Component {
  render() {
    const { filters } = this.props;
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hoteles</h1>
            <h2 className="subtitle">
              desde el <strong>{filters.dateFormatFrom}</strong> hasta el <strong>{filters.dateFormatTo}</strong>
            </h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero;
