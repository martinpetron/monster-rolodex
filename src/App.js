import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') //calling an api, fetching the data from the url
    .then(response =>response.json())                   //taking the response and converting it into a json format.
    .then(users =>this.setState({ monsters: users }));  //set the monsters_array to that array we've just created
  }

  handleChange = (e) => {
    this.setState ({ searchField: e.target.value })
  }

  render() {
        
    //const monsters = this.state.monsters; 
    //const searchField = this.state.searchField;
    //is equal to 
    const { monsters, searchField } = this.state; 
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
  
    return (
      <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox 
      placeholder='Search Monster' 
      handleChange={this.handleChange} 
      />
      <CardList monsters={filteredMonsters}></CardList>  
      </div>
    );
  }

}

export default App;
