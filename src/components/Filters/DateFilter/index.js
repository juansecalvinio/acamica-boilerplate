import React from 'react';

const DateFilter = props => {

    const { date, icon } = props;

    return (
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="date" />
                <span className="icon is-small is-left">
                <i className={`fas fa-${icon}`}></i>
                </span>
            </div>
        </div>
    );
}

export default DateFilter;