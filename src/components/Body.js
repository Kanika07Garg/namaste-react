import RestaurantCard from "./RestaurantCard";
import { restrautList} from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
    // local state variable - super powerful variable
    const [listOfRestaurants, setListofRestaurants] = useState(restrautList
        // [
        // {
        //     type: "restaurant",
        //     data: {              
        //       id: "73011",
        //       name: "KFC",
        //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        //       cuisines: ["American", "Snacks", "Biryani"],
        //       costForTwoString: "₹300 FOR TWO",
        //       deliveryTime: 31,
        //       avgRating: "4.0",
        //     }
        // },
        // {
        //     type: "restaurant",
        //     data: {              
        //       id: "73012",
        //       name: "Dominos",
        //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        //       cuisines: ["American", "Snacks", "Biryani"],
        //       costForTwoString: "₹300 FOR TWO",
        //       deliveryTime: 31,
        //       avgRating: "4.6",
        //     }
        // },
        // {
        //     type: "restaurant",
        //     data: {              
        //       id: "73013",
        //       name: "MCD",
        //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        //       cuisines: ["American", "Snacks", "Biryani"],
        //       costForTwoString: "₹300 FOR TWO",
        //       deliveryTime: 31,
        //       avgRating: "3.8",
        //     }
        // },
        // {
        //     type: "restaurant",
        //     data: {              
        //       id: "73014",
        //       name: "Coffee",
        //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        //       cuisines: ["American", "Snacks", "Biryani"],
        //       costForTwoString: "₹300 FOR TWO",
        //       deliveryTime: 31,
        //       avgRating: "4.1",
        //     }
        // },
        // ]
)
    return(
        <div className="body">
            <div className="filter"> 
                <button className="filter btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res)=>res.data.avgRating > 4)
                    setListofRestaurants(filteredList);
                }}
                >Top rated resturants</button>
            </div>
            <div className="res-container">
                {
                   listOfRestaurants.map(restraut =>
                     <RestaurantCard key={restraut.data.id} resData={restraut}/>
                ) 
                }
            </div>
        </div>
    )
};

export default Body;