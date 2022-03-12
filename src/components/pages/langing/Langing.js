import React from 'react';
import stars from '../langing/Images/stars.png';
import rocketman from '../langing/Images/rocketman.png';
import { Link } from 'react-router-dom';



import langing from '../langing/langing.css'


function Langing() {
  
  return (
    <div >
      <div className='mainsub'>

       <div className='img'>
             <img src={stars} alt="" />
      
      </div>



        <div className='lheading'>
            <h1>Welcome Rocketeer !</h1>
        </div>
      <div className='href'>
        <div className='button'>       
              <button><Link to="/Personal" className='buttlink'>Start Questionnarie</Link></button>
          <div className='link'>
            <Link to="/submapp">Submitted Applications</Link>
            
          </div>
         </div>
      </div>
      <div className='rock'>
        <img src={rocketman}/>
      </div>
   
      </div>
    </div>
    
  )
}

export default Langing