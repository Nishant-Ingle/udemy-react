import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class AppClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          'name': 'Abc',
        },
        {
          'name': 'Def',
        },
        {
          'name': 'Ghi',
        }]
    };
  }

  render() {
    return (
      <div className="App">
          {
            this.state.monsters.map((person) => {
              return <h1> { person.name } </h1>;
            })
          }
          
      </div>
    );
  }
}

export default AppClassComponent;
