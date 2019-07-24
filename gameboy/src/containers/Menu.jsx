import React, { Component, Fragment  } from 'react';
import MenuOption from '../components/MenuOption'
import '../css/menu.css'


export default class Menu extends Component {

  generateMenuOptions = () => {
    let currentSetName = this.props.screenState.curOptionSet;
    let currentOption = this.props.screenState.curOption;
    let currentSet = this.props.screenState.optionSets[currentSetName]

    let displayedOptions = []

    for (const [key, value] of Object.entries(currentSet)) {
      displayedOptions.push({key, value})  
    }

    return displayedOptions.map((option) => {
      if (option.key === currentOption) {
        return <li id="isSelected"><MenuOption optionText={option.value} optionKey={option.key} selectedOption={currentOption} changeOption={this.props.changeOption}/></li>
      } else {
        return <li><MenuOption optionText={option.value} optionKey={option.key} selectedOption={currentOption} changeOption={this.props.changeOption}/></li>
      }
    })

  }

  render() {
    return (
      <div>
        <ul>
          {this.generateMenuOptions()}
        </ul>
      </div>
    )
  }
}