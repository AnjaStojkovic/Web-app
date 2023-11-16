import { Fragment } from 'react';
import CartHeader from './CartHeader';

const Layout = (props) => {
  return (
    <Fragment>
     <CartHeader/>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
