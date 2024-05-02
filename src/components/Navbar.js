import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    return(
        <div className="header">
            <div className="logo-navbar">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-item">
                <ul className="list-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                       btnName==="Login" ? setBtnName("logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;