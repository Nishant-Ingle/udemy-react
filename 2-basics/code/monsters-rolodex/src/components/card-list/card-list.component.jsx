import './card-list.styles.css';
import { Component } from "react";

class CardList extends Component {
  render() {
    const monsters = this.props['filteredMonsters'];

    return (
      <div className='card-list'>
        {
          monsters.map((monster) => {
            const { id, name, email } = monster;

            return (
              <div className="card-container" key={ id }>
                <img
                  alt={`monster ${name}`}
                  src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h1> { name } </h1>
                <h1> { email } </h1>
              </div>
            );
          })
        }
      </div>
        
    );
  }
}

export default CardList;