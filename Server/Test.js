var Web3 = require('web3');

const Provider = require('@truffle/hdwallet-provider');

var ABI=require("./build/contracts/Demo.json");



var address = "0x1657217b801dB8AD47D9204E2eF7BBE9F1b87de2";
var privatekey = "599a243f4839b12b905b471e8777c9780826e75726284282023d122ad3c8579e";
var rpcurl = "HTTP://127.0.0.1:8545";

var provider = new Provider(privatekey,rpcurl);
var web3 = new Web3(provider);

var contract_address = "0xa9F0D9c647010568B807759b6C6AB9194a62C1a1";

var myContract = new web3.eth.Contract(
  ABI.abi,
  contract_address
);


const Set = async (para)=>{
    try{
        await myContract.methods.set(para).send({from :address})
        console.log("k "+para);
    }
    catch(error){
        console.log(error);
    }
}


const Get = async()=>{
    try{

        const kk = await myContract.methods.get().call();
        console.log("from blockchain "+kk)
    }
    catch(error){
        console.log(error);
    }
}

Get();
Set(500);
module.exports={
    Set,
    Get
}