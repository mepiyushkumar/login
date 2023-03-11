import React from "react";
import ClassEx from "./Components/ClassEx";
import Displayinfo from "./Components/Displayinfo";
import Fun from "./Components/Fun";
import Greet from "./Components/Greet";
import Login_page from "./Components/Login_page";
import Login_page_axios from "./Components/Login_page_axios"
import Blockchain from "./Components/Blockchain";

function App(){
    return(
        <>
        {/*<Greet name="Piyush"/>
        <Greet name="Sagar"/>
        <ClassEx/>
        <Fun/>
        <Login_page_axios/>
        <Displayinfo/>
        */}
        <Blockchain/>
        </>
    )
}


export default App;