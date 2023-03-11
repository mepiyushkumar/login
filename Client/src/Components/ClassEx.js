import React, { Component } from "react";

class ClassEx extends Component{
    constructor(){
        super()
        this.state = {
            mssg : "welcome"
        }
    }
    changeMethod(){
        this.setState({
            mssg : "Byeee"
        })
    }
    fun=()=>{
        this.setState({
            mssg : "good byeee"
        })
    }
    render(){
        return(
            <>
            <h1>{this.state.mssg}</h1>
            <button onClick={()=>this.changeMethod()}>Dussh</button>
            {/*<button onClick={this.changeMethod.bind(this)}>Dussh</button>*/}
            <button onClick={this.fun}>good</button>
            </>
        )
    }
}

export default ClassEx;