import React,{useState} from "react";

// here import cricket counter import
import cricketCounter from "./cricketCounter";
                        // porps
const  CricketProvider =(props)=>{
    //  below the cricker and setCricketer is now local variable 
    const [cricketer, setCricketer] = useState({
        name:"Sachin Tendulkar",
        age:47,
        country:"India",
        retired:true
    })
    return(
        //cricketCounter Provider now  take these variable store globle sCope using value
       <cricketCounter.Provider value={
         {
            cricketer: cricketer,
            setCricketer: setCricketer
         }

       }>
         {/* propes value now enterir App component value here now */}
        {props.children}

       </cricketCounter.Provider>
    )

}

export default CricketProvider;