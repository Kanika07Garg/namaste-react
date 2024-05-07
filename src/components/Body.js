import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    // local state variable - super powerful variable
    const [listOfRestaurants, setListofRestaurants] = useState([]);
    const [filtererdResVar, setFiltererdResVar ] = useState(listOfRestaurants);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser , setUserName} = useContext(UserContext);
    // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


    //to call the api
    useEffect(()=>{
        fecthData();
    },[])

    const fecthData = async()  => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json = await data.json();
        console.log(json?.data)
        // setListofRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListofRestaurants((json?.data?.cards.find((c)=>c.card?.card?.gridElements?.infoWithStyle?.restaurants).card?.card?.gridElements?.infoWithStyle?.restaurants));
        setFiltererdResVar((json?.data?.cards.find((c)=>c.card?.card?.gridElements?.infoWithStyle?.restaurants).card?.card?.gridElements?.infoWithStyle?.restaurants));
        // setFiltererdResVar(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    };
console.log('filtereed',filtererdResVar)
    if(!onlineStatus) return <h1>Oops! Something wrong</h1>

    return listOfRestaurants?.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="flex items-center"> 
                <div className="m-4 p-4 ">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)                        
                    }}/>
                    <button className="px-3 py-2 bg-gray-300 m-4 border border-solid border-gray-800 rounded-lg" onClick={()=>{
                        const filtererdRes = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFiltererdResVar(filtererdRes);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4">
                    <button className="px-3 py-2 bg-gray-300 border border-solid border-gray-800 rounded-lg" onClick={()=>{
                        const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4)
                        setListofRestaurants(filteredList);
                    }}
                    >Top rated resturants</button>
                </div>
                <div className="m-4 p-4 ">
                    <label>UserName : </label>
                    <input className="border border-black" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
                </div>
            </div>
            {/* <div className="flex flex-wrap">
                {
                   filtererdResVar?.map((restraut,index) => 
                 <Link key={restraut.info.id} to={'/restaurantmenu/'+restraut.info.id}>
                    {
                        restraut.info.avgRating > 4 ? <RestaurantCardPromoted resData={restraut}/> :  <RestaurantCard  resData={restraut}/>
                    }
                   
                </Link>) 
                }
            </div> */}
            <div className="flex flex-wrap">
                {
                   filtererdResVar?.map((restraut) => 
                 <Link key={restraut.info.id} to={'/restaurantmenu/'+restraut.info.id}>
                    <RestaurantCard resData={restraut}/> 
                </Link>) 
                }
            </div>
        </div>
    )
};

export default Body;