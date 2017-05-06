import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextEdit.css';

export default class TextEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.onChange(event);
    }
    render() {
        return (
            <div className="input-textedit">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <textarea
                  name={this.props.name}
                  id={this.props.name}
                  onChange={event => this.handleChange(event)}
                  value={this.state.value}
                />
            </div>
        );
    }
}

TextEdit.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
};

TextEdit.defaultProps = {
    value: 'Default value',
    label: 'Default value',
    onChange: () => {},
};
