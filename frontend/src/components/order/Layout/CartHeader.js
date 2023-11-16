import { useNavigate } from 'react-router-dom';
import CartButton from '../Cart/CartButton';
import classes from './CartHeader.module.css';

const CartHeader = (props) => {

  const navigate = useNavigate();

  const goHomeHandler = () => {
    navigate('/');
  }

  return (
    <header className={classes.header}>
      <h1>Order now!</h1>
      <nav>
        <ul className={classes.list}>
          <li>
            <CartButton />
          </li>
          <li>
            <button className={classes.home} onClick={goHomeHandler}>Home page</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default CartHeader;
