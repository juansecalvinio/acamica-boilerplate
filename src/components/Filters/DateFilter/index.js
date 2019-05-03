import React, { Component } from 'react';

class DateFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dateSelected: this.props.date.toISOString().split('T')[0]
        }
    }

    handleDateChange = event => {
        this.setState({
            dateSelected: event.target.value
        })
        this.props.onDateChange(event);
    }

    render() {

        const { icon, name } = this.props;

        return (
            <div className="field">
                <div className="control has-icons-left">
                    <input className="input" type="date" name={name} value={this.state.dateSelected} onChange={this.handleDateChange} />
                    <span className="icon is-small is-left">
                        <i className={`fas fa-${icon}`} />
                    </span>
                </div>
            </div>
        );

    }
}

export default DateFilter;