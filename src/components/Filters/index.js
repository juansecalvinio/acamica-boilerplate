import React, { Component } from 'react';

import DateFilter from './DateFilter';
import OptionsFilter from './OptionsFilter';

class Filters extends Component {
    render() {
        const { filters } = this.props;
        return (
            <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
                <div className="navbar-item">
                    <DateFilter
                    date={ filters.dateFrom }
                    icon="sign-in-alt" />
                </div>
                <div className="navbar-item">
                    <DateFilter
                    date={ filters.dateTo }
                    icon="sign-out-alt" />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ [ {value: undefined, name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
                    selected={ filters.country }
                    icon="globe" />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
                    selected={ filters.price }
                    icon="dollar-sign" />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
                    selected={ filters.rooms }
                    icon="bed" />
                </div>
            </nav>
        );
    }
};

export default Filters;