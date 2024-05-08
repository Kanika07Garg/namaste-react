import { CON_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../Store/cartSlice";
const ItemCards = ({itemList}) => {
    const dispatch = useDispatch();
    const handleAddClick = (item) => {
        dispatch(addItem(item))
    }
    console.log(itemList);
    return(
        <div>
            {itemList.map((item)=>(
                <div className="flex justify-between p-2 m-2 border-b-2 text-left" key={item?.card?.info?.id}>
                    <div className="w-9/12">
                        <div className="py-2"> 
                            <span>{item?.card?.info?.name}</span>
                            <span>- Rs.{(item?.card?.info?.price || item?.card?.info?.defaultPrice)/100}</span>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-3/12 p-4 relative">
                        <img className="w-full" src={CON_URL + item?.card?.info?.imageId}></img>
                        
                        <div className="absolute bottom-2">
                            <button className="bg-black px-2 mx-4 shadow rounded-lg text-white" onClick={()=>handleAddClick(item)}>Add+</button>

                        </div>

                    </div>
                </div>
                
            ))}
        </div>
    )
}

export default ItemCards;