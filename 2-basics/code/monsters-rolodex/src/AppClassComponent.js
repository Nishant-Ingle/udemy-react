import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class AppClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      'name': 'Nishant',
    };
    this.dummy = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          Hi {this.state.name} !
          <button
            onClick={() => {
              // Re-render X
              // this.state.name = 'New Value';

              // Re-render X
              // this.state = {
              //   name: 'Real new value',
              // };

              // Re-render -> Yes
              // this.setState({ name: 'Final new value !' });

              // Oops !
              this.setState({ name: { first: 'Nishant', last: 'Ingle' } });

              console.log(this.state.name);
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default AppClassComponent;
