import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../checkout-item/checkout-item.component';
import './checkout.component.scss';

const Checkout = () => {
  const { cartItems, addItemsToCart, removeItemToCart } = useContext(CartContext);
  console.log(cartItems);

  return (
    <div>
      <h1>I am the checkout page</h1>
      <div>
        {cartItems.map((cartItem) => {
          return (
            <div className='checkout-container'>
              <div className='checkout-header'>
                <div className='header-block'>
                  <span>Product</span>
                </div>
                <div className='header-block'>
                  <span>Description</span>
                </div>
                <div className='header-block'>
                  <span>Quantity</span>
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
              <div className='total'>TOTAL: $0</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Checkout;
