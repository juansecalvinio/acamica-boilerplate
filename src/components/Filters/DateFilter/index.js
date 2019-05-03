import React, { Component } from 'react';

class DateFilter extends Component {

    render() {

        const { date, icon } = this.props;

        return (
            <div className="field">
                <div className="control has-icons-left">
                    <input className="input" type="date" name={ date }/>
                    <span className="icon is-small is-left">
                    <i className={`fas fa-${icon}`}></i>
                    </span>
                </div>
            </div>
        );

    }
}

export default DateFilter;