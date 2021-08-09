import React,{useRef,useState} from 'react'
import './Card.css';

function Card() {

  const inputRef=useRef();
  const [inputedValue,setInputedValue]=useState('');
  const [isValid,setIsValidValue]=useState(true);
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    const typedValue=inputRef.current.value.trim();
    setInputedValue(typedValue);

    console.log(typedValue);
    console.log( Boolean(typedValue));

    if(!typedValue)  setIsValidValue(false);
    if(typedValue) setIsValidValue(true);
    console.log(inputedValue);
  }


  const handleOnBlur=(e)=>{
    console.log(`focus out`);

    const typedValue=inputRef.current.value.trim();


    if(!typedValue)  setIsValidValue(false);
    if(typedValue) setIsValidValue(true);
  };


  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">name :</label>
        <input type="text" ref={inputRef}
        onBlur={handleOnBlur}
        />
        <input type="text" />
        <input type="submit" value="click" />
         {!isValid && <p className='err-msg'>* inavlid form</p>}
      </form>
      <h1>{inputedValue}</h1>
    </div>
  )
}

export default Card;
