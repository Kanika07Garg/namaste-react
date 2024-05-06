import { CON_URL } from "../utils/constant";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name,cuisines,costForTwo,avgRating} = resData.info
    return(
        <div className="m-4 p-4 w-60 h-max bg-gray-200 rounded-lg justify items-stretch">
            <img 
                className="h-[150px] w-[100%] rounded-lg"
                alt="res-logo"
                src={CON_URL+cloudinaryImageId}>
            </img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <div className="flex justify-between py-2">
                <h4 className="font-medium">{costForTwo}</h4>
                <h4>{avgRating} Stars</h4>
            </div>
            <h4 className="">{cuisines.join(", ")}</h4>
        </div>
    )
}

export default RestaurantCard;