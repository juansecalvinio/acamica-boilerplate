import React, { Component } from 'react';

class OptionsFilter extends Component {

    render() {
        const { options, selected, icon } = this.props;

        return (
            <div className="field">
                <div className="control has-icons-left">
                    <div className="select" style={ {width: '100%'} }>
                    <select style={ {width: '100%'} } value={selected}>
                    { options.map(option => <option key={`${option.value}-${option.name}`} value={option.value}>{option.name}</option>) }
                    </select>
                    </div>
                    <div className="icon is-small is-left">
                    <i className={`fas fa-${icon}`}></i>
                    </div>
                </div>
            </div>
        )
    }
};

export default OptionsFilter;