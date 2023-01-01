import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';

class AppClassComponent extends Component {
  constructor() {
    super();
    this.state = { monsters: [], searchField: ''};
  }

  componentDidMount() {
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
      })
    });
  }

  onSearchChange = (event) => {
    this.setState(() => ({ searchField: event.target.value.toLowerCase() }));
  };


  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(
      (monster) => monster.name
                          .toLowerCase()
                          .includes(searchField));

    return (
      <div className="App">
          <SearchBox
            myClassName='monster-search-box'
            myPlaceholder='search monsters'
            myOnChangeHandler={ onSearchChange } />
          <CardList filteredMonsters={filteredMonsters} />
          
      </div>
    );
  }
}

export default AppClassComponent;
