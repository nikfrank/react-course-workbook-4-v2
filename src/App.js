import React, { Component } from 'react';
import './App.css';

import CoinPicker from './CoinPicker';

class App extends Component {
  state = {
    fromCoin: 'WINGS',
    toCoin: 'USD',
  }

  setFrom = event=> this.setState({ fromCoin: event.target.value })
  setTo = event=> this.setState({ toCoin: event.target.value })
  
  render() {
    return (
      <div className="App">
        <CoinPicker fromCoin={this.state.fromCoin}
                    toCoin={this.state.toCoin}
                    setFrom={this.setFrom}
                    setTo={this.setTo}/>
      </div>
    );
  }
}

export default App;
