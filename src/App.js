import React from 'react';
import Form from './components/form';
import {useSelector,useDispatch} from 'react-redux';
import {countrerActions} from './../src/store/index';

function App() {

 const dispatch=useDispatch();
 const counter=useSelector(state=>state.counter);
 const IsShowHandler=useSelector(state=>state.showCounter);


  const incrementHandler=()=>{
    dispatch({type:'increment'})
  };
  const decrementHandler=()=>{

    dispatch({type:'decrement'})
  };
  const incresesHandler=()=>{

    dispatch({type:'customIncrese',amount:10})
  };
  const toggleHandler=()=>{

    dispatch({type:'toggle'})
  };


  return (
    <>
    {console.log(`rendering..`)}
    {console.log(countrerActions)}
    {console.log(counter)}
    <h1>counter</h1>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      <button onClick={incresesHandler}>+10</button>
      <button onClick={toggleHandler}>toggle</button>
      {IsShowHandler && <h1>{counter}</h1>}
     <Form/>
    </>
  );
}

export default App;
