import React,{useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from '../src/store/CardProvider';
import Test from '../src/TEST/test';


function App() {
  const [cardIsShown,setCardIsShown]=useState(false);

  const showHandler=()=>{
    setCardIsShown(true);
  };
  const hideHandler=()=>{
    setCardIsShown(false);
  };




  return (
    <CartProvider>
      {cardIsShown && <Cart onClick={hideHandler}/>}
      <Header onClick={showHandler}/>
      <main>
        <Meals/>
      {/* <Test/> */}
      </main>
    </CartProvider>
  );
}

export default App;
