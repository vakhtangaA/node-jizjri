import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Test extends Component 
{
    constructor(){
        super()
        this.state = {
            load: true,
            title: "Title",
            data: [],
        }
    }

    async componentDidMount()
    {
        console.log("componentDidMount");
        //this.setState({ title: "Hello" })
        const url = 'https://bootcamp-2022.devtest.ge/api/skills';
        const response = await fetch(url);
        const data =  await response.json();
        this.setState({ data: data })
        console.log(data)
        this.setState({ load: false })
  
    }

    render() {
        console.log("render");
        return (
            <div>
                <div>{this.state.title}</div>

                {
                    this.state.data.map(function(item, i){
                        return <div>{item.title}</div>
                    })
                }
                
                <div>{this.state.load ? "Load ..." : ""}</div>
            </div>
        )
    }
}

export default Test