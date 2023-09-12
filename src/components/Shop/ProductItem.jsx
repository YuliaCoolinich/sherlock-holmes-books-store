import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import { cartActions } from "../../store/cart";
import classes from "./ProductItem.module.css";

const BUTTON_TEXT = 'Add to Cart';

const ProductItem = (props) => {
  const { id, title, price, description, image } = props;
  const dispatch = useDispatch();

  const onAddHandler = (event) => {
    event.preventDefault();
    dispatch(
      cartActions.addToCart({
        id,
        title,
        price,
        quantity: 1,
      })
    );
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <div className={classes.main}>
          <img className={classes.image} src={image} alt={title} />
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={onAddHandler}>{BUTTON_TEXT}</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
