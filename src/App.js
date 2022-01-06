import './App.css';
import image from './shopping.jpg';
import imageMan from './man.jpg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='App'>
        <img src= { image } width= '200px' alt='shop'/>
         <h1>Grocery List</h1>
        <GroceryList/>
          <img src= { imageMan } width= '200px' alt='man'/>
    </div>
  );
}

export default App;
