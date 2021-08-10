import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import {useSelector,useDispatch} from 'react-redux';
import {cartActions} from '../store/index';

const Cart = (props) => {

   //redux
   const dispatch=useDispatch();
   const cartitems=useSelector(state=>state.reducer.cartItems);
   console.log(cartitems);
   //

   const hideCartwindow=()=>{
    dispatch(cartActions.showCart());
   }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
        {cartitems.map(item=><CartItem
          key={item.id}
          item={{ title:item.title, quantity: item.quantity, total: item.total, price: item.price }}
        />)
        

        }
      </ul>
      <button className={classes.closeButton} onClick={hideCartwindow}>Close</button>
    </Card>
  );
};

export default Cart;
