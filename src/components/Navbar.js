import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {

    //subscribing to our store using selector
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    const [btnName, setBtnName] = useState("Login");
    const { loggedInUser } = useContext(UserContext)
    return(
        <div className="flex  justify-between shadow-lg bg-red-200">
            <div className="w-40">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-5 m-5">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to={"/cart"}>🛒-{cartItems.length}</Link></li>
                    <button className="px-4" onClick={()=>{
                       btnName==="Login" ? setBtnName("logout") : setBtnName("Login")
                    }}>{btnName}</button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;