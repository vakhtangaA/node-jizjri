import React, { Component } from 'react'
import err from '../err/err.css'
import {Link} from 'react-router-dom'
import { Spring, animated } from 'react-spring'

class Err extends Component {
  render() {
    return (
      <div>
              <div className='errmain'>
                        <div className='errmaincenter'>



                          
                        <Spring
                                     loop
                                     from={{ opacity: 0, color: 'red' }}
                                     to={[
                                       { opacity: 1, color: '#ffaaee' },
                                       { opacity: 0, color: 'rgb(14,26,19)' },
                                     ]}>
                                     {styles => (
                                       <animated.div style={styles}><h1 className='errhead'>404</h1></animated.div>
                                     )}
                          </Spring>
                              
                              
                              <h3 className='errheadh3'>Page Not Found</h3>
                              <p className='errp'>The Page you are looking for doen't exist. Go to 
                              <Link to='/'>HomePage</Link>
                              </p>
                        </div>
            </div>
      </div>
    )
  }
}

export default Err