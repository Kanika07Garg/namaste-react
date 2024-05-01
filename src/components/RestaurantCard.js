import { CON_URL } from "../utils/constant";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name,cuisines,costForTwoString,avgRating} = resData.data
    return(
        <div className="res-card">
            <img 
                className="res-logo"
                alt="res-logo"
                src={CON_URL+cloudinaryImageId}>
            </img>
            <h3 className="res-name">{resData.data.name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwoString}</h4>
            <h4>{avgRating}</h4>

        </div>
    )
}

export default RestaurantCard;