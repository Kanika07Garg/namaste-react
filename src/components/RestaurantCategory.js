import ItemCards from "./ItemCards";

 const RestaurantCategory = ({data, showList, setShowIndex}) => {
    const handleClick = () => {
        console.log("clicked?")
        setShowIndex();
    }
    return(
        <div>
            <div className=" w-6/12 m-auto bg-gray-100 my-4 p-4 shadow-md" onClick={handleClick}>
                <div className="flex justify-between">
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                    {showList ? <span>🔼</span> : <span>🔽</span>}
                </div>
                <div>
                    {showList && <ItemCards itemList={data?.itemCards}/>}
                </div>
                
            </div>
            
        </div>
    )
 }

 export default RestaurantCategory;