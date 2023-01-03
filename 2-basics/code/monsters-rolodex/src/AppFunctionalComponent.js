import './App.css';
import { Component, useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';



const AppFunctionalComponent = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([monsters]);
  const [stringField, setStringField] = useState([]);

  // console.log(searchField);
  console.log('render');

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const onStringChange = (event) => {
    setStringField(event.target.value.toLowerCase());
  };

  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(url)
    .then(resp => {
      return resp.json();
    })
    .then(users => setMonsters(users));
    },
    []);
  
    useEffect(() => {
      const newFilteredMonsters = monsters.filter((monster) =>
        monster.name
               .toLowerCase()
               .includes(searchField));

      setFilteredMonsters(newFilteredMonsters);
      console.log('filtered monsters');
    },
    [monsters, searchField]);

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        myClassName='monster-search-box'
        myPlaceholder='search monsters'
        myOnChangeHandler={ onSearchChange } />
      <SearchBox
        myPlaceholder='search string'
        myOnChangeHandler={ onStringChange } />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

/*
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
    

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox
          myClassName='monster-search-box'
          myPlaceholder='search monsters'
          myOnChangeHandler={ onSearchChange } />
        <CardList filteredMonsters={filteredMonsters} />
          
      </div>
    );
  }
}*/

export default AppFunctionalComponent;
