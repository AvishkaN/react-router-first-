import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import {useSelector,useDispatch} from 'react-redux';
import {cartActions} from '../store/index';




const Cart = (props) => {

    //redux
    const dispatch=useDispatch();
    const cartR=useSelector(state=>state.reducer.cartItems);
    //
    console.log(cartR);


  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartR.map(item=><CartItem
          key={item.id}
          item={
              { id:item.id,
                title: item.title,
                quantity: item.quantity, 
                total: item.total, 
                price: item.price 
              }
            }
        />
        )}
        
      </ul>
    </Card>
  );
};

export default Cart;
