import React from "react";
import { Carousel, Image } from "react-bootstrap";
import DanBennett from "./DanBennett.png";
import DanCalla from "./DanCalla.png";
import DanEvie from "./DanEvie.png";
import Family from "./Family.png";
import FamilyBeach from "./FamilyBeach.png"; 
import Kids from "./Kids.png";
import KrystieDan from "./KrystieDan.png";
import KrystieDan2 from "./KrystieDan2.png";
import './MinahanCarousel.css';
 

export function MinahanCarousel() {
    return (
        <Carousel fade prevLabel={null} nextLabel={null} id="mediaSize">
            <Carousel.Item>
                <Image 
                    id="img" 
                    src={Family}
                    className="d-block w-100"
                    alt="First slide" 
                />
                <Carousel.Caption>
                    <h3>Minahan's out for Dinner</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image 
                    id="img" 
                    src={KrystieDan}
                    className="d-block w-100"
                    alt="First slide" 
                /> 
                <Carousel.Caption>
                    <h3>Dan & Krystie</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image 
                    id="img" 
                    src={KrystieDan2}
                    className="d-block w-100"
                    alt="First slide" 
                /> 
                <Carousel.Caption>
                    <h3>Dan & Krystie at the GreenJackets</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image 
                    id="img" 
                    src={Kids}
                    className="d-block w-100"
                    alt="First slide" 
                /> 
                <Carousel.Caption>
                    <h3>First Day of School 2021!</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image 
                    id="img" 
                    src={DanCalla}
                    className="d-block w-100"
                    alt="First slide" 
                /> 
                <Carousel.Caption>
                    <h3>Dan & Calla</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image 
                    id="img" 
                    src={DanEvie}
                    className="d-block w-100"
                    alt="First slide" 
                /> 
                <Carousel.Caption>
                    <h3>Dan & Evie</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image 
                    id="img" 
                    src={DanBennett}
                    className="d-block w-100"
                    alt="First slide" 
                /> 
                <Carousel.Caption>
                    <h3>Dan & Bennett</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
