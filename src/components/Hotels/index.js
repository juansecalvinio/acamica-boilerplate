import React, { Component } from 'react';

import Hotel from '../Hotels/Hotel';

class Hotels extends Component {
    render() {
        const { data } = this.props;
        return(
            <section className="section" style={ {marginTop: '3em'} }>
                <div className="container">
                    <div className="columns is-multiline">
                        { data.map(hotel => <div className="column is-one-third"><Hotel hotel={ hotel } /></div>) }
                    </div>
                </div>
            </section>
        )
    }
}

export default Hotels;