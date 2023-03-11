import React, { Component } from "react";
class Data_Table extends Component{
    render(){
        return(
            <>
            <tr>
            {console.log("inside data table")}
            <td>{this.props.obj.name}</td>
            <td>{this.props.obj.info}</td>
            </tr>
            </>
        )
    }
}

export default Data_Table;