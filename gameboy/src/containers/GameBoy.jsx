import React, { Component, Fragment  } from 'react';
import Screen from './Screen'


export default class GameBoy extends Component {
  constructor() {
    super()
    this.state = {
      screen: {
        curOptionSet: "home",
        curOption: "login",
        optionSets: {
          home: {
            login: "Login",
            logout: "Logout",
            playGame: "Play Game"
          },
          play: {
            Game1: "Game1", 
            Game2: "Game2", 
            Game3: "Game3"
        }
        },
        isInGame: false,
        curGame: "Game1",
        games: {
          Game1: [],
          Game2: []
        }
      }
    }
  }

  changeOption = (newOption) => {
    console.log(newOption)
    this.setState({screen: {
      ...this.state.screen,
      curOption: newOption
    }})
  }

  changeOptionSet = () => {

  }

  render() {
    return (
      <div>
        Gameboy
        <Screen screenState={this.state.screen} changeOption={this.changeOption}/>
      </div>
    )
  }
}