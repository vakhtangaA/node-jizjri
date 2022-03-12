import React, { useState, useEffect } from 'react';
import personal from '..//personal/personal.css';
import { Link } from 'react-router-dom';
import {VscCircleLargeFilled}  from 'react-icons/vsc';
import {FaChevronCircleLeft} from 'react-icons/fa';
import {FaChevronCircleRight} from 'react-icons/fa';
import axios from 'axios';
function Personal() {
  // This is function for username validation
  const [countEnter, setCountEnter] = useState(false);
  const [username, setUsername] = useState('');
  const [usernameErr,setUsernameErr]=useState(false);

  
  function usernameHandler(e){
    // console.log(e.target.value);
    let item = e.target.value;
    setUsername(item)
    if(item.length < 2){
      setUsernameErr(true)
   

    }
    else{
      setUsernameErr(false)

    }
   }

  //this is function for lastname validation
  const [lastname,setLastname] = useState('');
  const [lastnameErr,setLastnameErr] = useState(false);
  function lastnameHandler(e){
    let item = e.target.value
    setLastname(item)
    if(item.length < 2){
      setLastnameErr(true)
    }
    else{
      setLastnameErr(false)
    }
  }

  //this is function for email validation
  const [email,setEmail] = useState('');
  const [emailErr,setEmailErr] = useState(false);

  function emailHandler(e){
    let item = e.target.value
    setEmail(item)
    if(item.includes('@')){
      setEmailErr(false)
      
    }
    else{
      setEmailErr(true)
    }
  }
 const next = usernameErr + emailErr + lastnameErr;

  //this is function for georgian number format
  const [number,setNumber] = useState ('');
  const [numberErr,setNumberErr] = useState(false)

  
  function numberHandler(e){
    let item = e.target.value
    setNumber(item)
    if(item.includes('+995')){
      setNumberErr(false)
     
    }
    else{
      setNumberErr(true)
    }
  }
//navigate next page of icon disable
const [form,setErr] = useState ('');
const [formErr,setFormErr] = useState(false)


  useEffect(() => {
    setCountEnter(false)
    if ((username.length >= 2 && usernameErr == false) && (lastname.length >= 2 && lastnameErr == false)&&(email.includes('@'))){
      setCountEnter(true)
    }
  });
  //post to api function 
  const changeHandler = (e) => {
    e.preventDefault();
    const username  = e;
    // const lastname  = e.target.value;
    // const email  = e.target.value;
    // const phone  = e.target.value;
    axios.post("https://bootcamp-2022.devtest.ge/api/application",{
      username,
      // lastname,
      // email,
      // phone

    })
    .then((response) =>{
      console.log(response);

    })
    .catch((error) =>{
      console.log(error);
    });
   

  }


  return (
    <div>
        <div className='pmain'>
            <div className='pleft container'>
                <div className='pheading'> <h1>Hey, Rocketeer, what are your coordinates?</h1> </div>
                <div className='pform'>
                    
                        <form className='formp'
                        onChange={changeHandler}
                         >

                      <input type="text"
                       placeholder='First Name'
                       
                        defaultValue={username}
                        id='username'
                        required
                        name='username' 
                       
                        onChange={usernameHandler}
                        className={`${usernameErr?'inpErr':'inpValid'}`}
                         />
                         {usernameErr?<span className='error'>Username must be minimum two simbols!</span>: ''}
                         

                      <input type="text" 
                       placeholder='Last Name'  
                        name='lastname' 
                        onChange={lastnameHandler}
                        className={`${lastnameErr?'inpErr':'inpValid'}`}
                     
                        />
                        {lastnameErr?<span className='error'>Last name must be minimum two simbols</span>: ''}

                      <input type="text"  
                      placeholder='E mail' 
                       name='email' 
                       onChange={emailHandler}
                       className={`${emailErr?'inpErr':'inpValid'}`}
                     
                       />
                       {emailErr?<span className='error'>This is wrong email format</span>:''}

                      <input type="text"  
                      placeholder='+995 5_ _ _ _' 
                      name='number'
                      onChange={numberHandler}
                      className={`${numberErr?'inpErr':"inpValid"}`}
                      
                       />
                       {numberErr? <span className='error'>Number must be Georgian format (+995)</span>:''}

                        </form>
                        <div className='navigate'>
                        <Link to="/"><FaChevronCircleLeft  id='ica'/></Link>
                        <Link to = "/" activeClassName='is-active' > <VscCircleLargeFilled id='ic' /></Link>  
                        <VscCircleLargeFilled id='ic' className='red'  />
                        <Link to={`${countEnter == true?  '/technical' : '/personal' }`}><VscCircleLargeFilled id='ic'className='red'/></Link>
                        
                        
                        {/* <FaChevronCircleRight id='ica' className={`${countEnter == true?  '' : '' }`} /> */}
                        {/* <Link to="/Technical"><FaChevronCircleRight id='ica' className={`${countEnter == true?'inpValid':'icHide'}`} /></Link> */}
                        <Link to={`${countEnter == true?  '/technical' : '/personal' }`}><FaChevronCircleRight className='red'/></Link>
                      
                          

                      
                       
                        
                      

                        </div>

                </div>



            </div>
            <div className='pright'>
                <div className='container'>
                <div className='pheading1'> <h1>Redberry Origins</h1> </div>
                <div className='ptext'> <p>As we said, Redberry has been on the field for quite some time now, 
                    and we have touched and embraced a variety of programming languages, technologies, 
                    philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, 
                    and allies with Serverside technologies like Docker and Kubernetes,
                     and now we have set foot in the web3 industry.</p>  </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Personal