import { LOGO_URL } from "../utils/constant";
const Header = () => {
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
                </ul>
            </div>
        </div>
    )
};

export default Header;