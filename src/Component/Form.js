import React,{useContext, useState} from "react";
import cricketCounter from "../context/cricketCounter";



const Form =()=>{
    const{cricketer, setCricketer} = useContext(cricketCounter);
    const[localCricketer, setLocalCricketer] = useState({
        name:"",
        age:"",
        country:"",
        retired:true
    })

    function upDate(e){
              e.preventDefault();
              let key = e.target.name;
            let value = e.target.value;
              setLocalCricketer({...localCricketer,[key]: value })
    }
    function handelSubmit(e){
        e.preventDefault()
        setCricketer({name: localCricketer.name, age: localCricketer.age, country: localCricketer.country, retired: localCricketer.retired});
        setLocalCricketer({name:"",
        age:"",
        country:"",
        retired:true})
    }

    return(
        <form onSubmit={handelSubmit}>
            <input type="text" name="name" value={localCricketer.name} onChange={upDate}/>
            <input type="text" name="age" value={localCricketer.age} onChange={upDate}/>
            <input type="text" name="country" value={localCricketer.country} onChange={upDate}/>
             <button type="submit">Submit</button>
        </form>
    )
}

export default Form;