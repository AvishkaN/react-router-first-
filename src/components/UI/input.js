import React,{forwardRef} from 'react'
import styled from 'styled-components'

// const input=(props)=> {
//     return (
//         <DIV className='input'>
//             <label htmlFor={props.input.id}>{props.label}</label>
//             <input  {...props.input}/>
//         </DIV>
//     )
// }


const input=forwardRef((props,ref)=>{
 
  return (
            <DIV className='input'>
                <label htmlFor={props.input.id}>{props.label}</label>
                <input ref={props.inputRef} {...props.input}/>
            </DIV>
        )
});

const DIV=styled.div`
&.input {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

&.input label {
  font-weight: bold;
  margin-right: 1rem;
}

&.input input {
  width: 3rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font: inherit;
  padding-left: 0.5rem;
}
`;


export default input;
