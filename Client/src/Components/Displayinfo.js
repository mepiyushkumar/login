import axios from "axios";
import React, { Component } from "react";
import Data_Table from "./Data_Table"

class Displayinfo extends Component{
    constructor(props){
        super(props)
        this.state = {userCollection:[]}
    }

    componentDidMount(){
        //console.log("1");
        axios.get("http://localhost:5000/get_from_db")
        .then((res)=>{
            this.setState({userCollection:res.data});})
        .catch((err)=>{console.log("erroe is "+err)})
    }
    dataTable(){
        console.log("inside_fn")
        return this.state.userCollection.map((data,i)=>{
            return <Data_Table obj={data} key={i} />
        });
    }

    render(){
        return(
            <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>NAME</td>
                            <td>INFO</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.dataTable()}
                    </tbody>

                </table>
            </div>
            </>
        )
    }
}

export default Displayinfo;