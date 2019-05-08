import React, { Component } from 'react';

import DateFilter from './DateFilter';
import OptionsFilter from './OptionsFilter';

class Filters extends Component {

    handleOptionChange = event => {
        let payload = this.props.filters;
        let{ name, value } = event.target;
        payload[name] = value;
        this.props.onFilterChange(payload, name);
    }

    handleDateChange = event => {
        let payload = this.props.filters;
        let{ name, value } = event.target;
        if(payload.dateTo > payload.dateFrom) {
            payload[name] = value;
            this.props.onFilterChange(payload, name);
        }
    }

    render() {

        const { filters } = this.props;

        const options = {
            country: [
                {value: '', name: 'Todos los países'}, 
                {value: 'Argentina', name: 'Argentina'}, 
                {value: 'Brasil', name: 'Brasil'}, 
                {value: 'Chile', name: 'Chile'}, 
                {value: 'Uruguay', name: 'Uruguay'}
            ],
            price: [
                {value: '', name: 'Cualquier precio'}, 
                {value: 1, name: '$'}, 
                {value: 2, name: '$$'}, 
                {value: 3, name: '$$$'}, 
                {value: 4, name: '$$$$'}
            ],
            rooms: [
                {value: '', name: 'Cualquier tamaño'},
                {value: 10, name: 'Hotel pequeño'},
                {value: 20, name: 'Hotel mediano'},
                {value: 30, name: 'Hotel grande'}
            ]
        }

        return (
            <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
                <div className="navbar-item">
                    <DateFilter
                    name='dateFrom'
                    date={ filters.dateFrom }
                    icon="sign-in-alt"
                    onDateChange={this.handleDateChange} />
                </div>
                <div className="navbar-item">
                    <DateFilter
                    name="dateTo"
                    date={ filters.dateTo }
                    icon="sign-out-alt"
                    onDateChange={this.handleDateChange} />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ options.country }
                    selected={ filters.country }
                    icon="globe"
                    name="country"
                    onOptionChange={this.handleOptionChange} />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ options.price }
                    selected={ filters.price }
                    icon="dollar-sign"
                    name="price"
                    onOptionChange={this.handleOptionChange} />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ options.rooms }
                    selected={ filters.rooms }
                    icon="bed"
                    name="rooms"
                    onOptionChange={this.handleOptionChange} />
                </div>
            </nav>
        );
    }
};

export default Filters;