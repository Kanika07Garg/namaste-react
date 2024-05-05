import { useEffect } from "react";
import { MENU_URL } from "./constant";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    });
    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId+'&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER');
        const json  = await data.json();
        setResInfo(json?.data);
    }
    return resInfo;
}

export default useRestaurantMenu;