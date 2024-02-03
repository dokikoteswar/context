import React from "react";
import { useContext } from "react";
import cricketCounter from "../context/cricketCounter";

const Hello =()=>{
    const{cricketer, setCricketer} = useContext(cricketCounter);

    return(
        <div>
            <p>WellCome {cricketer.name}</p>
            <p> Age: {cricketer.age} </p> 
            <p> Country: {cricketer.country} </p>
            <p> Retired: {cricketer.retired?"Yes": "No"} </p>
        </div>
    )

}
export default Hello