import React, { Component } from 'react'
import thanks from '../thanks/thanks.css'
import {Link} from 'react-router-dom'

 class Thanks extends Component {
  render() {
//redirect to main page after 3 seconds

    setTimeout(()=>{
     // this.props.navigation.navigate("/")
     this.props.history.push("/");
    }, 3000)


    return (
      <div>
          <div className='rsubmain'>
              <div className='center'>
                  <h1>Thanks for Joining 😊</h1>
                  </div>
              </div>
      </div>
    )
  }
}

export default Thanks