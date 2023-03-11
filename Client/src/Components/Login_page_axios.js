import React, { Component } from "react";
import { useState } from "react";
import axios from 'axios';
class Login_page_axios extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={name:'',info:''}
    }
    
  
    
    
    handleChange = e =>{
        //console.log(e);
        this.setState({[e.target.name]:e.target.value})
    }
    
    handleSubmit = e =>{
        e.preventDefault()
        console.log(this.state);
        const obj = {
            name : this.state.name,
            info : this.state.info
        }
        axios.post('http://localhost:5000/put_in_db',obj)
            .then((res)=>{console.log(res)})
            .catch((err)=>{console.log(err)})
            this.setState({name:'',info:''})
    }

    render(){
    return(
        <>
        <form onSubmit={this.handleSubmit}>
        
        <label htmlFor="name">Enter Name</label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>

        <label htmlFor="info">Enter info</label>
        <input type="text=" name="info" value={this.state.info} onChange={this.handleChange}/>

        <button type="submit">Submit</button>

        </form>
        </>
    )
    }
}

export default Login_page_axios;