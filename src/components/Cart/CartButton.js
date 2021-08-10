import classes from './CartButton.module.css';
// redux
import {useSelector,useDispatch} from 'react-redux';
import {cartActions} from '../store/index';
//


const CartButton = (props) => {
 //redux
 const dispatch=useDispatch();
 const IsshowCartWindow=useSelector(state=>state.reducer.openCartWindow);
 const totalCartItems=useSelector(state=>state.reducer.totalCartItems);

 //

  const handleShowCart=()=>{
    dispatch(cartActions.showCart());
  };

  return (
    <button className={`${classes.button}  ${classes.bump}`} onClick={handleShowCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default CartButton;
