import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class AppClassComponent extends Component {
  constructor() {
    console.log('constructor');
    super();
    this.state = { monsters: [], searchField: ''};
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
        return { monsters: users, searchField: '' };
      },
      () => {
        console.log("state: ");
        console.log(this.state);
      })
    });
  }

  render() {
    const filteredMonsters = this.state.monsters.filter(
      (monster) => monster.name
                          .toLowerCase()
                          .includes(this.state.searchField));

    console.log('render');
    return (
      <div className="App">
          <input
            className='search-box'
            type='search'
            placeholder='search monsters'
            onChange={ (event) => {
              console.log('before render');
              this.setState(() => ({ searchField: event.target.value.toLowerCase() }));
            }}
          />
          {
            filteredMonsters.map((person) => {
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
