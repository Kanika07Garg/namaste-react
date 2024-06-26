import { useState, useEffect } from "react"
const useOnlineStatus =  () => {

    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(()=>{
       checkOnlineStatus() ;
    },[])

    const checkOnlineStatus = () => {
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        });
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })
    };
    return onlineStatus;
}
export default useOnlineStatus;