import React, { Component, Fragment  } from 'react';


export default class MenuOption extends Component {
  render() {
    return (
      <div onClick={() => this.props.changeOption(this.props.optionKey)}>
        {this.props.optionText}
      </div>
    )
  }
}