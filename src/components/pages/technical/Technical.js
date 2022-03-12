import React, { Component } from 'react'
import  technical from '../technical/technical.css'
import { Link } from 'react-router-dom';
import {AiFillDelete} from "react-icons/ai"
import {VscCircleLargeFilled}  from 'react-icons/vsc';
import {FaChevronCircleLeft} from 'react-icons/fa';
import {FaChevronCircleRight} from 'react-icons/fa';


 class Technical extends Component {
   constructor(){
     super()
     this.state = {
       showMe:false,
       hideMe:true,
       data: [],
       additionEl: [],
     
     }
   }
   showClick(){
     this.setState({
       showMe:true,
     
      
     })
   }
   hideClick(){
     this.setState({
       hideMe:false
     })
     console.log("clicked");
   }

   
    async componentDidMount(){
     const url = 'https://bootcamp-2022.devtest.ge/api/skills';
     const response = await fetch(url);
     const data =  await response.json();
      this.setState({ data: data })

   }



   getValue =(e)=>{
    // console.log("hello", e.target.value);
    const skills = this.skills.value;
    const experience = this.experience.value

   
    this.setState({skills:skills, experience:experience})
    console.log(skills);

  }

  handleSubmit = (event) =>{
    // event.preventDefault();
    const skills = this.state.skills;
    const experience = this.state.experience
    console.log("Clicked", skills ,  experience);
  }

  delElemnt = (n) => {
    var newAdditionEl = this.state.additionEl
    delete newAdditionEl[n]
    this.setState({ additionEl: newAdditionEl })
  }

  addElemnt = (e) => {
    const skills = this.state.skills;
    if (skills != "skills") {
      const experience = this.state.experience
      var newAdditionEl = this.state.additionEl

      newAdditionEl.push(
        <div key={newAdditionEl.length} className='tinput'>
            {skills}{experience} 
            <div className='delic'>
                     <p className='icon' onClick={this.delElemnt.bind(this, newAdditionEl.length)}>-</p>
            </div>
        </div>
      )

      this.setState({ additionEl: newAdditionEl })
    }
  }


  
  render() {
    // console.log(this.state);
  
    return (
      
      <div>
        {/* <div>{this.state.loading?<div>Loading</div>:<div>No Loading...</div>}</div> */}
      <div className='tmain'>
        <div className='tleft'>
          <div className='theading'>
            <h1>Tell us about your skills</h1>
            </div>
            <div className='tselect'>
              <select onChange={ this.getValue }  ref = {(select) => this.skills = select} >
                <option className='option'>skills</option>
                {
                    this.state.data.map(function(item, i){
                        return <option className='option' key={item.id}>{item.title}</option>
                    })
                }
              </select>
              <input type='text'   placeholder='Experience Duration in Years' onChange={this.getValue}  ref={(input)=> this.experience = input} />
              <button className='btn' onClick={()=> this.addElemnt()} >Add Programming Language</button>
                      <div className='post'>
                          {
                            this.state.additionEl.map(function(item, i){
                              return item
                            })
                          }
                        
                        
                        
                        </div>
                        <div className='navigate'>
                                <Link to="/Personal"> <FaChevronCircleLeft  id='ica'/></Link>
                                <VscCircleLargeFilled id='ic'/>
                                <VscCircleLargeFilled id='ic'/>
                                <VscCircleLargeFilled id='ic'className='icbutton'/>
                                <Link to='/covid'><VscCircleLargeFilled id='ic'/></Link>
                                
                                <VscCircleLargeFilled id='ic'/>
                                <VscCircleLargeFilled id='ic'/>
                                <Link to="/covid"><FaChevronCircleRight id='ica'/></Link>
                                
                                

                      </div>

            </div>
                   
          </div>



          {/* onClick={this.handleSubmit} */}




          {/* this is right page backgoundcolor black */}
        <div className='tright'>
        <div className='theading'>
            <h1>A bit about our battles</h1>
            </div>
            <div className='ttext'>
              <p>As we said, Redberry has been on the field for quite some time now, 
                and we have touched and embraced a variety of programming languages, 
                technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, 
                refined in React, and allies with Serverside technologies like Docker and Kubernetes, 
                and now we have set foot in the web3 industry. </p>
              </div>
          </div>

      </div>
    </div>
    )
  }
}

export default Technical