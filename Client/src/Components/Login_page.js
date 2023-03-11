import React from "react";
import { useState } from "react";

function Login_page(){
    
    const [val,setVal] = useState({name:'',info:''})

    
    let name0,value0
    
    const handleChange=(e)=>{
        console.log(e);
        name0 = e.target.name;
        value0 = e.target.value;
        
        setVal({...val,[name0]:value0});
    }
    
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const {name,info} = val;

        const res  = await fetch("",{
            method : "POST",
            headers :{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name,info
            })
        });

        const data = await res.json();
        if(data.status === 422 ||!data ){
            window.alert("Invalid");
            console.log("Invalid")
        }
        else{
            window.alert("Succufull");
            console.log("Succufull")
        }

    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        
        <label for="name">Enter Name</label>
        <input type="text" name="name" value={val.name} onChange={handleChange}/>

        <label for="info">Enter info</label>
        <input type="text=" name="info" value={val.info} onChange={handleChange}/>

        <button type="submit">Submit</button>

        </form>
        </>
    )
}

export default Login_page;