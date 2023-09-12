import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const CART_TITLE = 'Your Shopping Cart';
const EMPTY_CART_MESSAGE = 'Empty cart. Add products!';

const Cart = () => {
  const { items, totalPrice } = useSelector((store) => store.cart);
  
  return (
    <Card className={classes.cart}>
      <h2>{CART_TITLE}</h2>
      {items.length === 0 ? (
        <p>{EMPTY_CART_MESSAGE}</p>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={{
                  id: item.id,
                  title: item.title,
                  quantity: item.quantity,
                  price: item.price,
                  total: item.quantity * item.price,
                }}
              />
            ))}
          </ul>
          <p>Total - ${totalPrice.toFixed(2)}</p>
        </>
      )}
    </Card>
  );
};

export default Cart;
