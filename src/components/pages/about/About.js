import React, { Component } from 'react'
import about from '../about/about.css' 
import { Link } from 'react-router-dom';

import {AiOutlineMinusCircle} from "react-icons/ai"
import {VscCircleLargeFilled}  from 'react-icons/vsc';
import {FaChevronCircleLeft} from 'react-icons/fa';
import {FaChevronCircleRight} from 'react-icons/fa';

 class About extends Component {
  render() {
    return (
      <div>
          <div className='amain'>
              {/* left sideb page */}
          <div className='aleft'>
              <div className='aheading'>
                  <h1>What about you?</h1>
                  </div>
              <div className='devtalks'>
                  <div className='devheading'>
                      <p>Would you attend Devtalks and maybe also organize your own?</p>
                      </div>
                      <div className='devradio'>
                          <div className='devyes'>
                             <input type='radio' name='dev'/>  Yes                       
                              </div>
                          <div className='devno'>
                          <input type='radio' name='dev'/>  No  

                          </div>

                      </div>
                      <div className='devtext'>
                          <div className='dtheading'>
                              <p>What would you speak about at Devtalk?</p>
                              </div>
                              <div className='dtarea'>
                                  <input type='textarea' placeholder='I would'/>

                              </div>
                              <div className='special'>
                                  <div className='specheading'>
                                      <p>Tell us something special</p>
                                      </div>
                                      <div className='spectxtarea'>
                                          <input type='textarea' placeholder='I...'/>
                                          </div>
                                  </div>
                                  <div className='navigate'>
                        <Link to="/Personal"> <FaChevronCircleLeft  id='ica'/></Link>
                        <VscCircleLargeFilled id='ic'/>
                        <VscCircleLargeFilled id='ic'/>
                        <VscCircleLargeFilled id='ic'className='icbutton'/>
                        <VscCircleLargeFilled id='ic'/>
                        <VscCircleLargeFilled id='ic'/>
                        <VscCircleLargeFilled id='ic'/>
                        <Link to="/submit"><FaChevronCircleRight id='ica'/></Link>
                        
                        

                        </div>

                      </div>

              </div>
              </div>


          {/* right side page */}
          <div className='aright'>
              <div className='arheading'>
                  <h1>Redberrian Insights</h1>
                  </div>
                  <div className='artext'>
                      <p>
                      We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! 
                      Unfortunately, covid ruined that fun like it did almost everything else in the world. 
                      But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead 
                      developers talk about topics they are passionate about. 
                      Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in 
                      the office but you can join our Zoom broadcast as well. 
                      Feel free to join either as an attendee or a speaker!
                      </p>
                      </div>
              </div>
              
              </div>
      </div>
    )
  }
}

export default About