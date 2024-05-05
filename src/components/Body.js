import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    // local state variable - super powerful variable
    const [listOfRestaurants, setListofRestaurants] = useState([]);
    const [filtererdResVar, setFiltererdResVar ] = useState(listOfRestaurants);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    //to call the api
    useEffect(()=>{
        fecthData();
    },[])

    const fecthData = async()  => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json = await data.json();
        setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFiltererdResVar(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(!onlineStatus) return <h1>Oops! Something wrong</h1>

    return listOfRestaurants?.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter"> 
                <div className="search">
                    <input type="text" className="search-text" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)                        
                    }}/>
                    <button className="search-btn" onClick={()=>{
                        const filtererdRes = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFiltererdResVar(filtererdRes);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4)
                    setListofRestaurants(filteredList);
                }}
                >Top rated resturants</button>
            </div>
            <div className="res-container">
                {
                   filtererdResVar?.map((restraut,index) => 
                 <Link key={restraut.info.id} to={'/restaurantmenu/'+restraut.info.id}><RestaurantCard  resData={restraut}/></Link>) 
                }
            </div>
        </div>
    )
};

export default Body;