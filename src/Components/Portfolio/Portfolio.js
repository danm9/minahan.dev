import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import Icon from "../Images/Icons/Icon.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Container, Row, Col} from "react-bootstrap";
import { projectData } from "./PortfolioData";
import './Portfolio.css';

export function Portfolio() {
    const ColoredLine = (width) => (
        <hr
            style={{
                color: "0a1f63",
                backgroundColor: "0a1f63",
                width: width,
                height: "1px",
            }}
        />
    );

    return (
        <>
            <NavBar />
            <div id="container">
                <div className="d-flex align-items-center flex-column">
                    <h1 className="mb-3">Dan's Portfolio</h1>
                    <Container>
                        <Row>
                            {projectData.map(item => (
                                <Col className="d-flex justify-content-around align-self-start">
                                    <Card className="mb-3" style={{width: "400px"}}> 
                                        <Card.Body>
                                            <div className="d-flex">
                                                <Card.Title className="me-auto">{item.Project}</Card.Title>
                                                <div>
                                                    <a href={item.Github} id="icon">
                                                        <FontAwesomeIcon size="1x"
                                                            icon={Icon.GitHub}
                                                        />
                                                    </a>
                                                    <a href={item.URL}>
                                                        <FontAwesomeIcon size="1x"
                                                            icon={Icon.Link}
                                                        />
                                                    </a>
                                                </div>
                                            </div>

                                            <ColoredLine />

                                            <Card.Text>{item.Description}</Card.Text>
                                            <div className="d-flex justify-content-evenly mt-3">
                                                {item.Technologies}
                                            </div> 
                                        </Card.Body>
                                    </Card>
                                </Col> 
                            ))}
                        </Row>                       
                    </Container>  
                </div>
            </div>
            <Footer />
        </>
    );
}
