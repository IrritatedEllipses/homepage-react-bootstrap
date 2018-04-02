import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import './home.css'

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Full Stack on the Rocks</h2>
          <p>A home for my various projects</p>
          <Link to="/About">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            {/* <Image src="assets/item1.jpg" circle className="profile-pic" /> */}
            <h3>First Thing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ducimus id! Nesciunt quis, nemo distinctio ratione modi alias optio similique.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            {/* <Image src="assets/item1.jpg" circle className="profile-pic" /> */}
            <h3>Second Thing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ducimus id! Nesciunt quis, nemo distinctio ratione modi alias optio similique.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            {/* <Image src="assets/item1.jpg" circle className="profile-pic" /> */}
            <h3>Third Thing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ducimus id! Nesciunt quis, nemo distinctio ratione modi alias optio similique.</p>
          </Col>
          </Row>
      
        
      </Grid>
        )
      }
    };
