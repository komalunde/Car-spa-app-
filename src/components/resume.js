import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Caption from './caption';
import Expert from './expert';
import Lacks from './lacks';
import sas from './sas.jpg';
import sli1 from './sli1.jpg';
import abc1 from './abc1.jpg';
import qw1 from './qw1.jpg';

class resume extends Component {
  render() {
	  
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img src={sas} alt="no photo" className="img-rounded" style={{height: '230px', borderRadius:'50%', margin:'auto'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em',bottom:'80%'}}>Rajesh Unde</h2>
            <h4 style={{color: 'grey'}}>CEO</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Car Spa entered the car care industry because we believed there was a need for a well-managed national car care retailer that could deliver an excellent customer experience and is the single most important objective behind the Car Spa concept. Our facilities are all conveniently located on main streets and highways – usually right on the corner. Our stores are designed for customer comfort, quick processing time, uncompromising safety, and high-quality results</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>A to Z car spa Kanjurmarg(E).</p>
            <h5>Phone</h5>
            <p>9983456451</p>
            <h5>Email</h5>
            <p>Rajesh98@gmail.com</p>
            <h5>Web</h5>
            <p>carspa.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Sevice at Home</h2>
            <Caption
				jDescription="Car wash lift, where cars are placed in a car wash lift where cars can then be washed by employees"
				Description=<img src={sli1} alt="no photo"  style={{height: '150px',width:'500px'}} /> />
               
			   <Caption
                 jDescription="A simple and automated type of car wash that is typically coin-operated or token-operated self-service system"
				 Description=<img src={abc1} alt="no poto"  style={{height: '150px',width:'500px'}} />  />
				  
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Quality</h2>
			  
            <Expert
				jDescription=" car washes, especially those with brushes, were once avoided by some meticulous car owners because of the risk of damaging the finish. Paint finishes have improved as have car washing processes, and this perception of vehicle damage is much less prevalent today. "
				 Description=<img src={qw1} alt="no photo"  style={{height: '150px',width:'500px'}} /> />
              
			  
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Facility</h2>
              <Lacks
                point="Doorstep"
                progress={80}
                />
                <Lacks
                  point="Touchless"
                  progress={20}
                  />
                  <Lacks
                    point="Internal car wash"
                    progress={60}
                    />
                    <Lacks
                      point="Rubbing & buffing Services"
                      progress={55}
                      />
          </Cell>
        </Grid>

 
      </div>
    )
  }
}
export default resume;