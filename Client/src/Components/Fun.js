import React, { useState } from "react";

function Fun(){

    const [num,setnum] = useState(0);

    function fn(){
        console.log("dsds");
        setnum(num + 1);
    }

    return(
        <>
        <p>{num}</p>
        <button onClick={fn}>Click</button>
        </>
    )
}

export default Fun;