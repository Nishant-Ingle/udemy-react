import './card.styles.css';

const Card = ({ id, name, email, myClassName }) => (
  <div className={myClassName} key={id}>
    <img
      alt={`monster ${name}`}
      src={`https://robohash.org/${id}?set=set2&size=180x180`} />
    <h1> { name } </h1>
    <h1> { email } </h1>
  </div>
);

export default Card;