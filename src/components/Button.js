import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
        principal: this.props.principal,
        years: this.props.years,
        rate: this.props.rate
    };
  }
  render() {
    return (
      <button>{this.props.principal}</button>
    )
  }
}

export default Button; // Don’t forget to use export default!
