import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import nap from "../components/images/boy.png";
import Github from "./Github";
import Footer from "./Footer";
import Skills from "./Skills"; 

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "60px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "3em", paddingBottom: "20px" }}>
            About <strong style={{ color : "yellow"}} className="purple">Me.</strong>
              
            </h1>
            <h5>
            Hi Everyone, I am <strong style={{ color : "yellow"}} className="purple">Yash Raj Singh Chouhan</strong> from <strong style={{ color : "yellow"}} className="purple">Udaipur, Rajasthan.</strong>
            </h5>
            <h5>
            I am pursuing B.tech in Computer Science from GITS Udaipur.
            </h5>
            <br></br>
            <h5>
            Apart from coding, some other activities that I love to do!
            </h5>
            <ul>
            <li className="about-activity">
              Playing Video Games.
            </li>
            <li className="about-activity">
              Trading in Stock Market.
            </li>
            <li className="about-activity">
              Travelling.
            </li>
          </ul>
          <hr></hr>
            
          <p className="text-center" style={{ marginBlockEnd: 0, color: "yellow" }}>
            "Keep upgrading your knowledge with Time"
          </p>
         <br></br>
          <footer className="blockquote-footer text-center">Yash Raj Singh Chouhan</footer>

          </Col>
          <Col
            md={5}
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
            className="about-img"
          >
            <img src={nap} alt="about" className="img-fluid" />
          </Col>
        </Row>
        
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "60px",
              paddingBottom: "50px",
            }}
          >
            <h2 className="text-center" style={{ fontSize: "3em", paddingBottom: "1px", color : "yellow" }}><strong>My Skills</strong></h2>
          </Col>
          <Col
            md={10}
            style={{ paddingTop: "10px", paddingBottom: "40px" }}
            className="about-img"
          >
          <Skills />
          </Col>
        </Row>
        <Github />
      </Container>
      <Footer />
    </Container>
  );
}


export default About;