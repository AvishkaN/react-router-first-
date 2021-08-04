import React,{useContext} from 'react'
import styled from 'styled-components'
import MealitemForm from '../MealItem/MealItemForm';
import CardContext from '../../../store/cart-context';

function MealItem(props) {
  console.log(props);

  const cartCtx=useContext(CardContext);

  console.log(cartCtx);
    const price=`$${props.price.toFixed(2)}`;


    const addToHandler=amount=>{
        console.log(amount);
        cartCtx.addItem({
          id:props.id,
          name:props.name,
          amount:amount,
          price:props.price,
        });
    };


    return (
        <Li className='meal'>
            <div>
                <h3>{props.name}</h3>
                <div className='description'>{props.description}</div>    
                <div className='price'>{price}</div>    
            </div>   
            <div>
              <MealitemForm id={props.id} onAddToCart={addToHandler}/>    
            </div> 
        </Li>
    )
}



const Li=styled.li`
 &.meal {
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
}

&.meal h3 {
  margin: 0 0 0.25rem 0;
}

&.description {
  font-style: italic;
}

& div .price {
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
}

`;




export default MealItem;
