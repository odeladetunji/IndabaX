import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import TopNav from './topNav';
import LargButtons from './largebuttons';
import {NavLink} from 'react-router-dom';

class AboutUs extends Component {
constructor(props, context) {
   super(props, context);

   this.handleSelect = this.handleSelect.bind(this);

   this.state = {
     index: 0,
     direction: null,
     interval: 1000,
     pauseOnHover: false
   };
 }

 handleSelect(selectedIndex, e) {
   alert(`selected=${selectedIndex}, direction=${e.direction}`);
   this.setState({
     index: selectedIndex,
     direction: e.direction
   });
 }

 render(){
   return(
      <div>
         <div className="aboutHeader">
             <TopNav name="Go Back"/>
         </div>
          
         <div className="aboutUsPage">
         <div className="leftSectionAboutUs">
             <div className="leftCentralizer">
                <input type="file" className="fileUpload"></input>
                <input type="file" className="fileUpload"></input>
                <input type="file" className="fileUpload"></input>

                <p id="addMoreFiles">Add more files</p>
                <p id="uploadInstructions">You can only select a maximum of 3 per time</p>
             </div>
             <LargButtons  name="VIEW RESULT"/>
         </div>
         <div className="rightSectionAboutUs">
             <h3>About Us</h3>
             <p>There are many variations of passages of Lorem Ipsum available, 
                 but the majority have suffered alteration in some form, by injected humour, 
                 or randomised words which don't look even slightly believable. If you 
                 are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                  anything embarrassing hidden in the middle of text. 
                  All the Lorem Ipsum generators on the Internet tend to repeat 
                  predefined chunks as necessary, making this the first true generator
                on the Internet. It uses a dictionary of over 200 Latin words, 
                combined with a handful of model sentence structures, to generate Lorem 
                Ipsum which looks reasonable. The generated Lorem Ipsum is 
                therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
         </div>
         </div>
      </div>
   )
 }
}

export default AboutUs;

