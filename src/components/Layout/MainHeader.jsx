import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const HEADER_TITLE = 'Sherlock Holmes Books';
const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>{HEADER_TITLE}</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
