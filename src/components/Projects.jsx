import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import { AiFillGithub } from 'react-icons/ai';
import fba from "../components/images/blog.png";
import myport from "../components/images/portfolio.png";
import eco from "../components/images/ecom.jpg";
import fce from "../components/images/face.jpeg";

const Projects = () => {
    return (
        <Container fluid className="project-section">
      <Particle />
      <Container>
                <h1 className="project-heading text-center">
                    My Recent <strong style={{color:'yellow'}}>Works</strong>
                </h1>
                <p className="text-center" style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "30px", marginLeft: "20px", marginTop: "20px" }}>
                    <Col md={3} id="project-card" className="project-card" style={{marginLeft: "10px", marginTop: "20px", paddingBottom: "20px"}}>
                        <Card className="project-card-view">
                            <Card.Img className="card-img" variant="top" src={fba} alt="card-img" />
                            <Card.Body>
                                <Card.Title>Blogging Web App.</Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                This is a Blogging Web app created using Python framework Flask and Bootstrap. It has login and logout functionality.
                                The database used in this app is MySQL.
                                </Card.Text>
                                <Button variant="primary" href="" target="_blank">
                                <AiFillGithub />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3} id="project-card" className="project-card" style={{marginLeft: "10px", marginTop: "20px", paddingBottom: "20px"}}>
                        <Card className="project-card-view">
                            <Card.Img className="card-img" variant="top" src={myport} alt="card-img" />
                            <Card.Body>
                                <Card.Title>My Portfolio.</Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                Created my personal portfolio using JS library React and bootstrap. This is fully responsive portfolio created using the React-bootstrap. It is deployed on github pages.
                                </Card.Text>
                                <Button variant="primary" href="" target="_blank">
                                <AiFillGithub />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3} id="project-card" className="project-card" style={{marginLeft: "10px", marginTop: "20px", paddingBottom: "20px"}}>
                        <Card className="project-card-view">
                            <Card.Img className="card-img" variant="top" src={eco} alt="card-img" />
                            <Card.Body>
                                <Card.Title>E-Commerce website.</Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                This is a E-commerce app created using Python framework Flask and Bootstrap. The database used in this app is MySQL. It has login and logout functionality for both admin and user.
                                It also has the dashboard for admin for all the details of their products etc.
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/yash-debug/Ecom" target="_blank">
                                <AiFillGithub />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3} id="project-card" className="project-card" style={{marginLeft: "10px", marginTop: "20px", paddingBottom: "20px"}}>
                        <Card className="project-card-view">
                            <Card.Img className="card-img" variant="top" src={fce} alt="card-img" />
                            <Card.Body>
                                <Card.Title>Face Recognition App.</Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                    Using one of the most powerful libraries in python "open CV", this application can detect human face.
                                </Card.Text>
                                <Button variant="primary" href="" target="_blank">
                                <AiFillGithub />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
                <div>
        <footer class="footer footer-home">
            <p>Developed by <strong style={{ color : 'yellow'}}>Yash Raj</strong> | © 2021 YRSC</p>
        </footer>
        </div>
      </Container>
    </Container>
        
    )
}

export default Projects;
