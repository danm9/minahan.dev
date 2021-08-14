import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { MinahanCarousel } from "../Images/Carousel/MinahanCarousel";
import { Footer } from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "../Images/Icons/Icon.js"
import './Home.css';

export function Home() {
    return (
        <>
            <NavBar />
            <div id="container">
                <div className="d-flex align-items-center flex-column">
                    <h1 className="mt-3 mb-3">Welcome to Dan's Page!</h1>
                    <MinahanCarousel />
                    <p className="w-50 text-center mt-3" style={{fontSize: "16px"}}>
                        I am a family man, lover of all New England sports, educational enthusiast, 
                        project practitioner, and veteran. Check out my website that I use for my 
                        <a href="/resume" id="link"> Resume</a> and my 
                        <a href="/portfolio" id="link"> Portfolio</a> of work. 
                    </p>
                </div>

                <div id="button-group" className="d-flex justify-content-evenly align-center mt-5 pb-3">
                    <a id="button" href="/about" className="text-center">
                        <FontAwesomeIcon size="5x"
                            style={{color: "#0a1f63"}}
                            className="mx-auto"
                            icon={Icon.FileAlt}
                        />
                        <h3>RESUME</h3>
                    </a>
                    <a id="button" href="/about" className="text-center">
                        <FontAwesomeIcon size="5x"
                            style={{color: "#0a1f63"}}
                            className="mx-auto"
                            icon={Icon.LaptopCode}
                        />
                        <h3>PORTFOLIO</h3>
                    </a>
                </div>
                
            </div>
            <Footer />
        </>
    );
} 
