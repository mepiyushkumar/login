import React, { Component, useState } from "react";
import * as ReactDOM from 'react-dom/client';
import DisplayPage from "./DisplayPage";
const Demo_ABI = require("./Demo.json");
var Web3 = require('web3');



const Blockchain=()=>{

    const [wall_address,setwall_address] = useState("0x1657217b801dB8AD47D9204E2eF7BBE9F1b87de2")
    const [contract,setcontract] = useState()

    async function fun(){
        var web3 = new Web3('HTTP://127.0.0.1:8545'); 
        var id = await web3.eth.net.getId();
        var deployedNetwork = Demo_ABI.networks[id];
        
        const addresses = await web3.eth.getAccounts();

        var contractz = new web3.eth.Contract(
            Demo_ABI.abi,
            deployedNetwork.address
        );

        setwall_address(addresses[0]);
        setcontract(contractz);
        console.log(wall_address);
        console.log(contractz);
        
        const k = ReactDOM.createRoot(document.getElementById('xx'));
        k.render(<React.StrictMode>    <DisplayPage wal={wall_address} con={contract}/>   </React.StrictMode>);
    }

    return(
        <>
            <div id="xx">
            <p>Home Page</p>
            <button onClick={()=>{fun()}}>Button</button>
            </div>
            
        </>
    )
} 

export default Blockchain;