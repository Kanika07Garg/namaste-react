import { CON_URL } from "../utils/constant";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name,cuisines,costForTwo,avgRating} = resData.info
    return(
        <div className="res-card">
            <img 
                className="res-logo"
                alt="res-logo"
                src={CON_URL+cloudinaryImageId}>
            </img>
            <h3 className="res-name">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} Stars</h4>
        </div>
    )
}

export default RestaurantCard;