import React, { useState } from "react";

const DisplayPage=(props)=>{
    const [val,setVal] = useState(0);

    async function Fun(){
        try{

            await props.con.methods.get().call().then((data)=>{
                console.log(data);
                setVal(data);
                console.log(val);
            })
        }
        catch(error){
            console.log(error)
        }

    }

    return(
        <>
        <h1>This is </h1>
        <button onClick={()=>{Fun()}}>Hello</button>
        </>
    )
}

export default DisplayPage;
