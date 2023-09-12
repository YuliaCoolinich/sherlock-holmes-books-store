import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import * as cartActions from "./store/cartActions";

let isInitial = true;

function App() {
  const { isCartShown } = useSelector((state) => state.ui);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.isChanged) {
      dispatch(cartActions.sendCart(cart));
    }
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(cartActions.getCart());
  }, [dispatch]);

  return (
    <>
      <Layout>{isCartShown ? <Cart /> : <Products />}</Layout>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
    </>
  );
}

export default App;
