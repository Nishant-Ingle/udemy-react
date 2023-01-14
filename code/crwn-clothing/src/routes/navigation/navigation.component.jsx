import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/user.context.jsx';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const {hasShopped, setHasShopped} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  console.log(setHasShopped(null));

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className='logo' />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <CartIcon />
        </div>
        { isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;