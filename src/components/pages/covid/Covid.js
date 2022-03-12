import React, { Component, useState } from 'react'
import covid from '../covid/covid.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {BsCalendar3} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {AiOutlineMinusCircle} from "react-icons/ai"
import {VscCircleLargeFilled}  from 'react-icons/vsc';
import {FaChevronCircleLeft} from 'react-icons/fa';
import {FaChevronCircleRight} from 'react-icons/fa';


 class Covid extends Component {
    //  constructor(){
    //      super();
    //      this.state={
    //          covCalendar:true,

    //      }
    //      this.setState({
    //          covCalendar: ''
    //      })
    //  }
  handleCovid = (e) =>{
    
      console.log(this.state.covCalendar,'aaabaaa');
      let item = e.target.value
      if(item === 'yes'){
       this.state.covCalendar = true
       console.log(this.state.covCalendar);
      }
      else if (item === 'no'){
        this.state.covCalendar = false
          console.log(this.state.covCalendar);
      }
  

  } 
  render() {
   
    return (
      <div>
         <h1>{this.setState.covCalendar}</h1> 
            <div className='zmain'>
                {/* left side of page */}
                <div className='zcleft'>
                    <div className='zcheading'>
                        <h1>Covid Stuff</h1>
                    </div>
                    <div className='zsurvey'>
                        <div className='zwork'>
                            <label className='zprefer'>how would you prefer to work?</label>
                            <div className='zsairme'>
                                    <input type='radio' name='work'/>From Sairme Office
                            </div>
                            <div className='zhome'>
                                    <input type='radio' name='zwork'/>From Home
                            </div>
                                <div className='zhybrid'>
                                    <input type='radio' name='work'/>From Hybrid
                                </div>
                        </div>

                            <div className='zcovid'>
                                <div className='zcov19'>
                                    <label>Did you contact covid 19?:(</label>
                                </div>
                                <div className='zyes'>
                                    <input type='radio' name='contact' value='yes'/>Yes
                                </div>
                                <div className='zno'>
                                    <input type='radio' name='contact' value='no' />No
                                </div>


                            </div>
                            {/* {`$''{this.state.covCalendar?'hidedate':'zdate'}`}*/}
                            <div className='zwhen'>
                                <div className='whencal'>
                                        <label>When?</label>
                                    <div className='calendar'>
                                            <DatePicker placeholderText='Date'  className={this.props.covCalendar?'hidedate':'zdate'} ></DatePicker>
                                    </div>

                                </div>

                            </div>
                            <div  className='zvaccin'>
                                <div className='vaccinated'>
                                    <p>Have you been vaccinated?</p>
                                </div>
                                <div className='zvyes'>
                                    <input type='radio' name='contact'/>Yes
                                </div>
                            <div className='zzvno'>
                                    <input type='radio' name='contact'/>No
                            </div>

                            </div>
                        

                                
                        </div>
                        <div className='zlastvac'>
                                <div className='zvactext'>
                                    <p>When did you get your last covid vaccine?</p>
                                </div>
                                <div className='zlastcal'>
                                    <DatePicker placeholderText='Date  'className='zdate'></DatePicker>
                                </div>
                                        <div className='navigate'>
                                                <Link to="/Personal"> <FaChevronCircleLeft  id='ica'/></Link>
                                                <VscCircleLargeFilled id='ic'/>
                                                <VscCircleLargeFilled id='ic'/>
                                                <VscCircleLargeFilled id='ic'className='icbutton'/>
                                                <VscCircleLargeFilled id='ic'/>
                                                <VscCircleLargeFilled id='ic'/>
                                                <VscCircleLargeFilled id='ic'/>
                                                <Link to="/about"><FaChevronCircleRight id='ica'/></Link>
                                                            
                                        </div>
                                
                            </div>
                    </div>


                    {/* right side of page */}
                        <div className='zcright'>
                                <div className='zcrheading'>
                                    <h1>Redberry Covid Policies</h1>
                                </div>
                                        <div className='zctext'>
                                                <p>
                                                    As this infamous pandemic took over the world, 
                                                    we adjusted our working practices so that our employees can be as safe and comfortable as possible.
                                                    We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. 
                                                    If it was up to us, we would love you to see us in the office because we think face-to-face communications > Zoom meetings. 
                                                    Both on the fun and productivity scales. 
                                                </p>
                                        </div>
                        </div>

                </div>
      </div>
    )
  }
}

export default Covid