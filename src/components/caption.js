import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Caption extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.jDescription}</p>
        </Cell>
        <Cell col={8}>
          <p>{this.props.Description}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Caption;