import logo from './logo.svg';
import './App.css';

const categories = [
  {
    id: 1,
    title: 'Hats'
  },
  {
    id: 2,
    title: 'Jackets'
  },
  {
    id: 3,
    title: 'Sneakers'
  },
  {
    id: 4,
    title: 'Womens'
  },
  {
    id: 5,
    title: 'Mens'
  }
];

const App = () => {
  return (
    <div className="categories-container">
      {
        categories.map(({id, title}) => (
          <div key={id} className="category-container">
            <img className="background-image" />
            <div className="category-body-container">
              <h2>{ title }</h2>
              <p>Shop Now</p>
            </div>
          </div>
        ))
      } 
    </div>
  );
}

export default App;
