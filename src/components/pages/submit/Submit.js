import React, { Component } from 'react'
import submit from '../submit/submit.css'
import { Link } from 'react-router-dom'

 class Submit extends Component {
  render() {
      // this.setState = {
      //     link:'Hello'
      // }
    
      
    return (
      <div>
          <div className='submain'>
              <div className='divbutton'>
                  <Link to='thanks'> <button>Submit</button></Link>
                 
                  <a href='#'>go back</a>
                  </div>
               

          </div>
      </div>
    )
  }
}

export default Submit