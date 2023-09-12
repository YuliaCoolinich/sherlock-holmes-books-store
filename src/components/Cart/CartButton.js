import { useSelector, useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui';

const CART_TITLE = 'My Cart';

const CartButton = (props) => {
  const { totalQuantity } = useSelector(store => store.cart);
  const dispatch = useDispatch();
  const onOpenCartHandler = (event) => {
    event.preventDefault();
    dispatch(uiActions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={onOpenCartHandler}>
      <span>{CART_TITLE}</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
