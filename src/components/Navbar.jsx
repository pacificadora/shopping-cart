import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between">
        <NavLink to="/">
          <div>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fecommerce-logo&psig=AOvVaw2BsT6PUwyvd5n2BQhqLKFz&ust=1729044476870000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOCCz-Cmj4kDFQAAAAAdAAAAABAE" />
          </div>
        </NavLink>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <FaShoppingCart></FaShoppingCart>
          </NavLink>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
