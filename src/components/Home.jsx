import React from 'react'
import web from "../components/images/code.png"
import Type from './Type';
import Particle from './Particle';

const Home = () => {
    return (
        <>  
        <Particle />
          <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav-bg">
                <div className="row"> 
                    <div className="col-10 mx-auto">
                      <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                          <h1>Hola ! <span className="wave">👋🏻</span> </h1><h1 className="mt-3">My name is <strong className="brand-name">Yash Raj.</strong></h1>
                          <h2 className="my-5">
                          <div style={{ textAlign: "left"}} >
                          <Type />
                        
                        </div>
                          </h2>
                        </div>

                          <div className="col-lg-6 order-1 order-lg-2 header-img">
                            
                            <img src={web} className="img-fluid animated" alt="Main-image"></img>

                          </div>
                        </div>
                      </div>     
                </div>

            </div>
          </section>
          <footer class="footer footer-home">
                <p>Developed by <strong style={{ color : 'yellow'}}>Yash Raj</strong> | © 2021 YRSC</p>
            </footer>
        </>
    )
}

export default Home;