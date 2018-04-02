import React, { Component } from 'react';
import { Grid, Col, Image, Row } from 'react-bootstrap';
import './About.css'

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="images/about-header-crop.jpg" className="about-header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="images/about-chris-photo.jpg" className="about-profile-pic" rounded />
            <section className="about-me">
            <h3>Christopher Culp</h3>
            <p>left behind his life-long career of giving people alcohol in return for money with a singular goal in mind: to become a full-stack web engineer and spend the rest of his life solving problems.</p>
            <p>Armed with nothing more than a mountain of spare parts for a computer, the full support of his girlfriend, and the burgeoning web tutorial landscape he spend the next months of his life soaking up as much knowledge as he could. With sites such as <a href="http://www.theodinproject">The Odin Project</a> and <a href="http://www.pluralsight.com">Pluralsight</a> to guide him, Chris took the first steps to achieving his goal of a new career.</p>
            <p>One where he didn't have to list off the beers on tap.</p>
            <p>Now he spends his days creating custom semantic HTML5 websites, navigating through the dark forest of CSS, and practicing his JavaScript-fu with daily katas. While currently fleshing out his front-end skills, Chris also has an eye on back-end languages that will sate his hunger for learning new things haven chosen to focus on Ruby for his first back-end language.</p>
             
            </section>  
          </Col>
        </Grid>
        <Grid>
          <Row>
          <Col xs={12} sm={8} smOffset={2}> 
          <h3 className="footer-contact-at">Contact me at:</h3>
          </Col>
          <Col xs={12} sm={8} smOffset={2}>
            <p><a href="mailto:Christopher.D.Culp@gmail.com">Christopher.D.Culp@gmail.com</a> <a href="http://www.fullstackontherocks.com">FullStackOnTheRocks.com</a> <a href="http://irritatedellipses.github.com">IrritatedEllipses.github.com</a></p>
          
          </Col>
          </Row>
          </Grid>
        
      </div>
    )
  }
};
