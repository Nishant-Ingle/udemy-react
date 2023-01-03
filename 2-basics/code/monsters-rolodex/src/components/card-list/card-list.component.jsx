import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {
      monsters.map((monster) => {
        const { id, name, email } = monster;

        return (
          <Card
            key={ id }
            myClassName="card-container"
            id={ id }
            name={ name }
            email={ email } />
        );
      })
    }
  </div>
);

export default CardList;