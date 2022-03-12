import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import submapp from '../submapps/submapp.css'
import {RiArrowDropDownLine} from 'react-icons/ri'
 class SubmApp extends Component {
  render() {
    return (
<div>
    <div className='xmain'>
                <div className='xcenter'>
                        <div className='xheading'> <h1>Submitted Applications  </h1>  </div>
                            <div className='xdrop'>
                                <div className='xfirst'> <p>1</p>    <RiArrowDropDownLine className='icon'/> </div>
                                <div className='xfirst'> <p>2</p>    <RiArrowDropDownLine className='icon'/> </div>
                                <div className='xfirst'> <p>3</p>    <RiArrowDropDownLine className='icon'/></div>      
                            </div>
                                <div className='xperskil'>
                                    <div className='xpersonal'>
                                        <p className='xhead'>Personal Information</p>
                                        <p className='xfname'>First name</p>
                                        <p className='xlname'>last name</p>  
                                        <p className='xemail'>E Mail</p> 
                                        <p className='xphone'>Phone</p>             
                                    </div>
                                    <div className='skill'>
                                        <p className='xhead'>Skillset</p>
                                        <p className='xfskill'>PHP</p>
                                        <p className='xsskill'>React</p>   
                                    </div>
                                </div>
                                <div className='covinsig'>
                                    <div className='covidd'>
                                        <p className='head'>Covid Situation</p> 
                                        <p className='pwork'>how would you prefer to work?</p>
                                    <div className='radbutt'>
                                        <div className='sairme'>
                                            <input type='radio' name='work'/> From Sairme Office
                                        </div>
                                        <div className='home'>
                                            <input type='radio' name='work'/> From Home
                                        </div>
                                        
                                            <div className='hybrid'>
                                                <input type='radio' name='work'/> Hybrid
                                            </div>
                                    </div>

                                    </div>
                                    <div className='insigts'>
                                            <p className='head'>Insights</p>
                                            <p className='devt'>Would you attend Devtalks and maybe also organize your own?</p> 
                                        <div className='yesno'>
                                                <div className='yes'>
                                                    <input type='radio' name='yesno'/>Yes
                                                </div>
                                                <div className='no' >
                                                    <input type='radio' name='yesno'/>No
                                                </div>    
                                        </div>  
                                    </div>
                                </div>
                                <div className='covid19'>
                                    <div className='left'>
                                        <div className='cov'>
                                            <p>Did you have covid 19?</p>
                                                <div className='covradio'>
                                                    <input type='radio' name='covid' className='cyes'/>Yes <br></br>
                                                    <input type='radio' name='covid' className='cno'/>No
                                                </div>
                                               <p className='pcov'>When did you have covid 19?</p> 
                                               <input type='text' placeholder='02/04/2014' className='covcal'/>
                                             
                                               
                                        </div>
                                    </div>
                                    <div className='right'>
                                        <p>What would you speak about at Devtalk?</p>
                                        <input type='textarea' placeholder='I would speak about subject of how to center a div'/>
                                        <p className='specp'>Tell us somthing special</p>
                                        <input type='textarea' placeholder='i can deBug anything!' className='debug'/>
                                    </div>
                                </div>
                                <div className='last'>
                                               <p className='pvac'>Have you been vaccinated?</p>
                                               <input type='radio' name='covid' className='vyesc'/>Yes <br></br>
                                               <input type='radio' name='covid' className='vnoc'/>No
                                               <p className='pcovvac'>When did you get covid vaccine?</p>
                                               <input type='text' placeholder='08/04/2022' className='covcal'/>
                                               </div>
                                
                </div>
                
                    
                
    </div>
    
</div>


    )
  }
}

export default SubmApp