import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class AppClassComponent extends Component {
  originalState = null;

  constructor() {
    console.log('constructor');
    super();
    this.state = {
      monsters: [
        {
          id: '1',
          name: 'Abc',
        },
        {
          id: '2',
          name: 'Def',
        },
        {
          id: '3',
          name: 'Ghi',
        }]
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then(resp => {
      return resp.json();
    })
    .then(users => {
      this.setState(() => {
        return this.originalState = { monsters: users };
      },
      () => {
        console.log("state: ");
        console.log(this.state);
      })
    });
  }

  render() {
    console.log('render');
    return (
      <div className="App">
          <input
            className='search-box'
            type='search'
            placeholder='search monsters'
            onChange={ (event) => {
              console.log(event.target.value);
              let updatedMonsters = this.originalState.monsters.filter(
                (monster) => monster.name
                                    .toLowerCase()
                                    .includes(event.target
                                                   .value
                                                   .toLowerCase()));

              this.setState(() => ({ monsters: updatedMonsters }));
            }}
          />
          {
            this.state.monsters.map((person) => {
              return <div key={ person.id }>
                <h1> { person.name } </h1>
              </div>;
            })
          }
          
      </div>
    );
  }
}

export default AppClassComponent;
