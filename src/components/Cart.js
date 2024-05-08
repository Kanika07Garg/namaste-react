import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../Store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  //subscribing to our store using selector
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch  = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  console.log(cartItems);
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="font-bold text-xl">Cart</h1>
      <div className="m-auto w-6/12 py-4" >
       { cartItems.length !== 0 ?  
       <button className="m-2 p-2 border border-black rounded-lg" onClick={handleClearCart}>Clear Cart</button> : 
       <h3>Your cart is empty! <Link className="text-blue-400" to={"/"}>Click here</Link> to add items!</h3>}
        <ItemCards itemList={cartItems}></ItemCards>
      </div>
    </div>
  );
};

export default Cart;
