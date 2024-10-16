import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => { state });
  return (
    <div>
      {
        cart.length > 0 ?
          (
            <div>
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={itemIndex}></CartItem>
                })
              }
            </div>
          ) :
          (
            <div>
              <h1>Cart Empty</h1>
              <Link to="/">
                <button>Shop Now </button>
              </Link>
            </div>
          )
      }
    </div>
  );
};

export default Cart;
