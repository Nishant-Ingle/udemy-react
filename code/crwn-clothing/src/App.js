import './App.css';
import Home from './routes/home/home.component';
import {Routes, Route} from 'react-router-dom';

const Shop = () => "I am shop component";

const App = () => {
  return (
    <Routes>

      <Route path="/app" element={<Home />} >
        <Route path='shop' element={<Shop />}>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
