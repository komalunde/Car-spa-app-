import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent,Footer } from 'react-mdl';
import car720 from './car720.jpg';
import hu from './hu.jpg';

class Contact extends React.Component {
  render() {
    return(
      <div className="contact-body" >
	  <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Rajesh Unde</h2>
            <img src={hu} alt="no photo" style={{height: '250px'}} />
<p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Technology is allowing people to see the importance of a good car wash. As a result, In India people prefers car washes are done right manner and that they last longer.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" />
                    9864135536
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax"/>
                    (022-25686986)
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" />
                    Rajesh98@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" />
                    Yuvi5236
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
	  </div>
    )
  }
}export default Contact;