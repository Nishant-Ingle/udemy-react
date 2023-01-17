import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../checkout-item/checkout-item.component';
import './checkout.component.scss';

const Checkout = () => {
  const { cartItems, addItemsToCart, removeItemToCart, cartTotal } = useContext(CartContext);
  console.log('cartTotal: ' + cartTotal);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Desc </span>
        </div>
        <div className='header-block'>
          <span>Count</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${cartTotal}</div>
    </div>
  );
}

export default Checkout;
