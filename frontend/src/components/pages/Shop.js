import { useSelector } from 'react-redux';
import Layout from '../order/Layout/Layout';
import Products from '../order/Shop/Products';
import Cart from '../order/Cart/Cart';

function Shop() {

  const show = useSelector(state => state.ui.cartIsVisible);

  return (
    <Layout>
      {show && <Cart />}
      <Products />
    </Layout>
  );
}

export default Shop;
