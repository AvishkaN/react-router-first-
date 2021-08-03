import React from 'react'
import styled from 'styled-components'
import Input from '../../UI/input'

const MealItemForm=(props)=> {
    return (
        <FORM className='form'>
            <Input label={'Amount'} 
                    input={
                        {
                            id:'amount',
                            type:'number',
                            min:'1',
                            max:'5',
                            step:'1',
                            defaultValue:'1',
                        }
                    } 
            />
            <button>+ Add</button>
        </FORM>
    )
}

const FORM=styled.form`
   &.form {
  text-align: right;
}

&.form button {
  font: inherit;
  cursor: pointer;
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;
}

&.form button:hover,
&.form button:active {
  background-color: #641e03;
  border-color: #641e03;
}

`;


export default MealItemForm
