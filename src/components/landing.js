import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import car720 from './car720.jpg';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={car720} alt="np photo" className="tar-img" />
			  
            <div className="banner-text">
              <h3 style={{color:'white'}}>Waterless car wash service at your doorstep. We cheer and we pray. Your car needs a spray! ...</h3>

            <hr/>

          <p>Mumbai | Pune | Nasik | Nagpur</p>

        <div className="social-links">

          
          <a href="http://google.com" target="_blank">
            <i className="fa fa-linkedin-square"  />
          </a>

          
          <a href="http://google.com" target="_blank">
            <i className="fa fa-github-square"  />
          </a>

          <a href="http://google.com" target="_blank">
            <i className="fa fa-free-code-camp" />
          </a>

          
          <a href="http://google.com" target="_blank">
            <i className="fa fa-youtube-square"  />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Landing;