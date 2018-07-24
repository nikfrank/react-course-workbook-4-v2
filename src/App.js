import React, { Component } from 'react';
import './App.css';

import ExchangeWidget from './ExchangeWidget';

class App extends Component {
  state = {
    widgetIds: [ ],
  }

  addWidget = ()=> this.setState(state => ({
    widgetIds: state.widgetIds.concat( 'widget'+Math.random() )
  }) )

  removeWidget = ({ target: { id } })=>
    this.setState(state => ({
      widgetIds: state.widgetIds.filter( wid => wid !== id )
    }) )
      
  render() {
    const { widgetIds } = this.state;
    
    return (
      <div className="App">
        <button onClick={this.addWidget}>+</button>
        {
          widgetIds.map( id => (
            <div key={id}>
              <ExchangeWidget/>
              <button onClick={this.removeWidget} id={id}>X</button>
            </div>
          ) )
        }
      </div>
    );
  }
}

export default App;
