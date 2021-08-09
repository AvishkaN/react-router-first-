import React from 'react';
import Form from './components/form';
import Header from './components/Header/header';
import {useSelector,useDispatch} from 'react-redux';
import {counterActions} from './../src/store/index';

function App() {

 const dispatch=useDispatch();
 const counter=useSelector(state=>state.counter.counter);
 const IsShowHandler=useSelector(state=>state.counter.showCounter);


  const incrementHandler=()=>{
    dispatch(counterActions.increment());
  };
  const decrementHandler=()=>{

    dispatch(counterActions.decrement());
  };
  const incresesHandler=()=>{

    dispatch(counterActions.increase(10))
  };
  const toggleHandler=()=>{

    dispatch(counterActions.toggleCounter())
  };


  return (
    <>
    {console.log(`rendering..`)}
    {console.log(useSelector(state=>state))}
    {console.log(dispatch)}
    <Header/>
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
