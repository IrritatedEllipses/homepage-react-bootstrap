import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class Sitenavigation extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
      <Navbar.Header>
          <Navbar.Brand>
              <Link to="/">Full Stack on the Rocks</Link>
            
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
          <NavItem eventKey={1} componentClass={Link} href="/" to="/">
          Home
          </NavItem>
          <NavItem eventKey={2} componentClass={Link} href="/" to="/News">
          News
          </NavItem>
          <NavItem eventKey={3} componentClass={Link} href="/" to="/About">
          About
          </NavItem>

          </Nav>

        </Navbar.Collapse>
      </Navbar>
    )
  }
};
