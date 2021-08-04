import React,{useRef} from 'react'
import styled from 'styled-components'
import Input from './test2'


const initialState={
    fisrt:0,
    second:5,
};



function Test() {

const inputref=useRef();

console.log(inputref.current);

const handleOnclick=()=>{
    console.log(`handleOnclick`);
    console.log(inputref);
    inputref.current.focus()
};


return (
    <DIV>
            <h1>test</h1>
            <Input inputref={inputref}/>
            <button  onClick={handleOnclick}>focus now</button>
    </DIV>
    )
}

const DIV=styled.div`
    color: red;
`;


export default Test;
