import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdCode } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import Particle from './Particle';
import { AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'

export default function Navbar() {
    return (
        <>
            <Particle />
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">

                    
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/"><strong>Yr.</strong></NavLink>
                                <button className="navbar-toggler" style={{ background : 'yellow' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        
                                        <li className="nav-item">
                                            <NavLink  className="nav-link" aria-current="page" to="/" >
                                                <AiOutlineHome style={{ marginBottom: "5px" }} /> Home
                                            </NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink activeClassName='menu_active' className="nav-link" to="/about">
                                            <AiOutlineUser style={{ marginBottom: "5px" }} /> About</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink activeClassName='menu_active' className="nav-link" to="/projects">
                                            <MdCode style={{ marginBottom: "5px" }} /> Projects</NavLink>
                                        </li>

                                        <li className="nav-item">
                                        <a  className="nav-link" aria-current="page" href="https://cdn.statically.io/gh/yash-debug/Resume/b6aee719f8a10e8315fed6bce4373371e7f6311d/YrResume.pdf"  target="_blank" rel="noreferrer noopener" >
                                            <RiPagesLine style={{ marginBottom: "5px" }} /> Resume</a>
                                        </li>
                                        <li className="nav-item">
                                            <a  className="nav-link github" aria-current="page" href="https://github.com/yash-debug"  target="_blank" rel="noreferrer noopener" >
                                                <FiGithub style={{ marginBottom: "5px"}} />
                                            </a>
                                        </li>

                                        <li>
                                            <a  className="nav-link github" aria-current="page" href="https://www.linkedin.com/in/yashrajsinghchouhan5333"  target="_blank" rel="noreferrer noopener" >
                                            <AiOutlineLinkedin style={{ marginBottom: "5px"}} />
                                            </a>
                                        </li>

                                        <li>
                                            <a  className="nav-link github" aria-current="page" href="https://www.instagram.com/yashraj.exe"  target="_blank" rel="noreferrer noopener" >
                                            <AiOutlineInstagram style={{ marginBottom: "5px"}} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <hr className="line-break" />
        </>
            )
}

