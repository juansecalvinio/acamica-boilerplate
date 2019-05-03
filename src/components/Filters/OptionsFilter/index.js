import React, { Component } from 'react';

class OptionsFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            optionSelected: this.props.selected
        }
    }

    handleOptionChange = event => {
        this.setState({
            optionSelected: event.target.value
        })
        this.props.onOptionChange(event);
    }

    render() {
        const { options, icon, name  } = this.props;

        return (
            <div className="field">
                <div className="control has-icons-left">
                    <div className="select" style={ {width: '100%'} }>
                        <select style={ {width: '100%'} } value={this.state.optionSelected} name={name} onChange={this.handleOptionChange}>
                        { options.map(option => <option key={`${option.value}-${option.name}`} value={option.value}>{option.name}</option>) }
                        </select>
                    </div>
                    <div className="icon is-small is-left">
                        <i className={`fas fa-${icon}`} />
                    </div>
                </div>
            </div>
        )
    }
};

export default OptionsFilter;