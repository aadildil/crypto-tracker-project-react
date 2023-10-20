import React,{useEffect,useState} from "react";
import Header from "../Components/common/Header/Header" 
import TabsComponent from "../Components/Dashboard/tabs/TabsComponent";
import axios from "axios";






const Dashboard=()=>{

    const [coins,setCoins]=useState([])

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
            .then((response) => {
               
               
                setCoins(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Header/>
            <TabsComponent coins={coins} />
        </div>
    )
}
export default Dashboard;