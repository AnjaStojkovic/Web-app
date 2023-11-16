import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

const Cart = (props) => {

  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const orderHandler = () => {
    alert('Your order was successfully sent')
    navigate("/");
  }

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
          key={item.id}
          item={{ 
            id: item.id,
            name: item.name, 
            quantity: item.quantity, 
            total: item.totalPrice, 
            price: item.price 
          }}
        />
        ))}
        
      </ul>
      <button onClick={orderHandler} className={classes.order}>Order now</button>
    </Card>
  );
};

export default Cart;
