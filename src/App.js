import './App.css';
import Header from './Components/Header/Header';
import LoadGames from './Components/Load Games/LoadGames';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import CartOverview from './Components/CartOverview/CartOverview';
import useData from './Hooks/useData';
import useCart from './Hooks/useCart';
import { useState } from 'react';
import { addGame, getGames } from './Fake Data/FakeStorage';

function App() {
  const [data, setData] = useData();
  const [cart, setCart] = useCart();
  const [random, setRandom] = useState([]);


  const addToCart = (game) => {
    if (!alert()) {
      const storedCart = addGame(game);
      setCart(storedCart);
    }
  }

  const DeleteItem = (game) => {
    let newCart = [], index = 0;
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      newCart = JSON.parse(storedCart);
    }

    for (const items of newCart) {
      if (items.id === game.id) {
        break;
      }
      index++;
    }
    newCart.splice(index, 1);
    if (newCart.length !== 0) localStorage.setItem('cart', JSON.stringify(newCart));
    else localStorage.removeItem('cart');
    setCart(newCart);
  }

  const ramdomAdd = (localCart) => {

    const NewItem = localCart[Math.floor(Math.random() * localCart.length)];
    let newCart = [];
    newCart.push(NewItem);
    setRandom(newCart);
  }

  const emptyCart = () => {
    localStorage.removeItem('cart');
    window.location.reload();
  }

  const alert = () => {
    const localCart = getGames();
    if (localCart.length === 4) {
      return true;
    }
    return false;
  }
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<LoadGames addToCart={addToCart} DeleteItem={DeleteItem}
          ramdomAdd={ramdomAdd} emptyCart={emptyCart} alert={alert}
          cart={cart} random={random} data={data}></LoadGames>}></Route>
        <Route path="/cart" element={<CartOverview addToCart={addToCart} DeleteItem={DeleteItem}
          ramdomAdd={ramdomAdd} random={random} emptyCart={emptyCart} alert={alert} cart={cart} data={data}></CartOverview>}></Route>
      </Routes>
    </div>
  );
}

export default App;
