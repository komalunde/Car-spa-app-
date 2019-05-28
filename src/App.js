import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<img src={logo} alt="no photo" className="img-rounded" style={{height: '65px', borderRadius:'50%', margin:'auto'}} />} scroll>
            <Navigation>
                <Link to="/resume">Information</Link>
                <Link to="/contact">Contact</Link>
				  <Link to="/landing">Summry</Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}
export default App;