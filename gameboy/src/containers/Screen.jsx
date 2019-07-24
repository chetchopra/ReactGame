import React, { Component, Fragment  } from 'react';
import Menu from './Menu'


export default class Screen extends Component {


  render() {
    return (
      <div>
        Screen
        <Menu screenState={this.props.screenState} changeOption={this.props.changeOption}/>
        
      </div>
    )
  }
}