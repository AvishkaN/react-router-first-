import React,{useEffect,useState} from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/notification/notification';

//redux config
import {useSelector,useDispatch} from 'react-redux';
import {cartActions} from '../src/components/store/index';
//

function App() {
  //redux data
  const IsshowCartWindow=useSelector(state=>state.reducer.openCartWindow);
  const cart=useSelector(state=>state.reducer.cartItems);
  const fetchStatus0=useSelector(state=>state.reducer.fetchStatus);
  //

  const dispatch=useDispatch();
  console.log(fetchStatus0);
  //


  useEffect(async()=>{
    try{

      const response=await fetch('https://redux-1c3f4-default-rtdb.firebaseio.com/redux.json',{
        method:'PUT',
        body:JSON.stringify(cart)
      });

      // update redux
     const FetchStatus={
        status:'success',
        title:'exprole your fav items',
        message:'buy now 👉',
      };

      dispatch(cartActions.changeFetchStatus(FetchStatus));
      //
    }
    catch(err){
      
      console.log(err);
      // update redux
      const FetchStatus={
        status:'error',
        title:'failed load ..',
        message:'can\'t connet to the dataBase',
      };

      dispatch(cartActions.changeFetchStatus(FetchStatus));
      //
    }

  },[cart]);

  return (
    <Layout>     
      <Notification status={fetchStatus0.status}  title={fetchStatus0.title} message={fetchStatus0.message}/>
     { IsshowCartWindow && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
