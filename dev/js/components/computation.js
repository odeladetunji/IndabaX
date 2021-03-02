import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import LargeButtons from './largebuttons';
import TopNav from './topNav';
import {NavLink} from 'react-router-dom';

class Computations extends Component {
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
          <div className="computations">
          <div className="compFirstSection">
              <h5>Image Input</h5>
              <p>Name of File</p>
             <div className="scanImageDiv"></div>
          </div>
          <div className="compSecondSection">
             <h5>HeatMap</h5>
             <div className="scanImageDiv"></div>
          </div>
          <div className="compThirdSection">
              <h5>Charts of Predictions in the</h5>
              <h5>range of 0 to 1</h5>
             <div className="rangeItSelf">
                 <div className="typeOfRange">
                     <p>Normal</p>
                     <p>Benign</p>
                     <p>Invasive</p>
                     <p>InSitu</p>
                 </div>
                 <div className="rangeDrawers">
                     <div className="rangeDiv">
                          <div className="first">
                              <p>0</p>
                          </div>
                          <div className="second">
                               <input type="range" min="1" max="10" class="slider" id="myRange" />
                          </div>
                          <div className="third">
                              <p>1</p>
                          </div>
                     </div>
                     <div className="rangeDiv benign" >
                          <div className="first">
                              <p>0</p>
                          </div>
                          <div className="second">
                               <input type="range" min="1" max="10" class="slider" id="myRange" />
                          </div>
                          <div className="third">
                              <p>1</p>
                          </div>
                     </div>
                     <div className="rangeDiv invasive">
                          <div className="first">
                              <p>0</p>
                          </div>
                          <div className="second">
                               <input type="range" min="1" max="10" class="slider" id="myRange" />
                          </div>
                          <div className="third">
                              <p>1</p>
                          </div>
                     </div>
                     <div className="rangeDiv insitu">
                          <div className="first">
                              <p>0</p>
                          </div>
                          <div className="second">
                               <input type="range" min="1" max="10" class="slider" id="myRange" />
                          </div>
                          <div className="third">
                              <p>1</p>
                          </div>
                     </div>
                 </div>
             </div>
          </div>
          </div>
          
          <div className="twoButtonNav">
              <div className="first">
                <LargeButtons name="Next Result"/>
              </div>
              <div className="second">
                <LargeButtons name="Download"/>
              </div>
          </div>
      </div>
   )
 }
}

export default Computations;

