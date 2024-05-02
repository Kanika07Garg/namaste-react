import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constant";
const RestaurantMenu = () => {
    const [resMenu, setResMenu] = useState(null);
    const {resId} = useParams();
    console.log(resId)
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId+'&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER');
        const json  = await data.json();
        setResMenu(json?.data);
        console.log('menu',json?.data?.cards[2]?.card?.card)
    }
    if(resMenu===null) return <Shimmer/>;
    const{name, cuisines, costForTwoMessage} = resMenu?.cards[2]?.card?.card?.info;
    const {itemCards} = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards)

    return (
        <div className="res-menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>Menu</h3>
            <ul>
                {itemCards.map((items)=><li key={
                    items.card.info.id
                }>{items.card.info.name} - Rs {(items.card.info.price)/100}</li>)}
            </ul>
        </div>
    )
};

export default RestaurantMenu;