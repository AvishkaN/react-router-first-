import ProductItem from './ProductItem';
import classes from './Products.module.css';

import {useSelector,useDispatch} from 'react-redux';
import {cartActions} from '../store/index';

const Products = (props) => {

    //redux
    const dispatch=useDispatch();
    
    const cartR=useSelector(state=>state.reducer.productItems);
    const cartitems=useSelector(state=>state.reducer.cartItems);
    
    console.log(cartR);
    console.log(cartitems);
    //

    const addToCartHandler=(itemId)=>{
      console.log(`add to cart`);
      console.log(itemId);
      dispatch(cartActions.addCart(itemId));
    };


  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
        cartR.map(item=><ProductItem
                  key={item.id}
                  id={item.id}
                  title= {item.title}
                  price= {item.price}
                  description= {item.description}
                  onClick={addToCartHandler}

          />)
        }
            
     
        )
      </ul>
    </section>
  );
};

export default Products;
