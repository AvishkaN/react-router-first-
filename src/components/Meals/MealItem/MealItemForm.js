import React,{useRef} from 'react'
import styled from 'styled-components'
import Input from '../../UI/input'

const MealItemForm=(props)=> {

  const amountInputRef=useRef();

  const submitHndler=(event)=>{
    event.preventDefault();
    console.log(`submitHndler`);


    const entertedAmount=+amountInputRef.current.value;

    console.log(entertedAmount)

    if(!entertedAmount){
      console.log(`invalid`);
      return;
    }
    props.onAddToCart(entertedAmount);

  };

    return (
        <FORM className='form' onSubmit={submitHndler}>
            <Input 
                inputRef={amountInputRef}
                label={'Amount'} 
                        input={
                            {
                                id:props.id+'amount',
                                type:'number',
                                min:'1',
                                max:'5',
                                step:'1',
                                defaultValue:'1',
                                
                            }
                        } 
                />
            <button type='submit'>+ Add</button>
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
