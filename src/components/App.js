import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system'
import Form from './form/Form'; 
import '../styles/App.css';
import logo from '../assets/photo.png'
import Instructions from '../__env/Instructions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img src={logo} alt={'logo'} height="100" width="100" style={{display: 'relative', top: 0, right: 0, margin: 0}}/>
        </div>
        <Container fluid={true}>
          <Row style={{borderBottom: '1px solid gray', marginTop: 15, marginBottom: 15}}>
            <p className="App-intro">
              We want to create a web app that allows users to look up the weather for a specific city and state utilizing the Weather Underground API
            </p>
          </Row>
          <Row>
            <Col md={4} style={{borderRight: '1px solid gray', height: '500px'}}>
              <Instructions />
            </Col>
            <Col md={8}>
              <Form />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
