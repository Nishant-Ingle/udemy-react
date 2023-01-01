import './card-list.styles.css';
import Card from '../card/card.component';
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
              <Card
                key={id}
                myClassName="card-container"
                id={ id }
                name={ name }
                email={ email } />
            );
          })
        }
      </div>
        
    );
  }
}

export default CardList;