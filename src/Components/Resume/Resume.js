import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { BrowserView, MobileView } from "react-device-detect";
import Icon from "../Images/Icons/Icon.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Container, Card, Col, Row} from "react-bootstrap";
import Headshot from "../Images/Headshot.png";
import { experienceData, toolsData, programmingData, educationData, skillsData } from "./ResumeData";
import './Resume.css';

export function Resume() { 
    const ColoredLine = () => (
        <hr
            style={{
                color: "0a1f63",
                backgroundColor: "0a1f63",
                width: "225px",
                height: "1px",
            }}
        />
    );

    const Education =
        educationData.map(item => (
            <div className="d-flex">
                <Image id="logo" src={item.Logo}/>
                <div id="college-container" className="d-flex flex-column">
                    <Card.Text><a href="https://www.uga.edu/">{item.College}</a></Card.Text>
                    <Card.Text className="mb-2" id="college-name">{item.Program}</Card.Text>
                </div>
            </div>
        ))

    const Skills =
        skillsData.map(item => (
            <div className="d-flex">
                <FontAwesomeIcon size="1x" icon={item.Icon} style={{width: "1rem"}} /> 
                <Card.Text className="mb-1" style={{marginLeft: ".5rem"}}>{item.Skill}</Card.Text>
            </div>    
        ))

    const Programming =
        programmingData.map(item => (
                <Row>
                    <Col><Image id="logo" src={item}/></Col>
                </Row>
        ))

    const Tools = 
        toolsData.map(item => (
                <Row>
                    <Col><Image id="logo" src={item}/></Col>
                </Row>
        ))

    const resumeItems = [
        { "Title": "Education", "Items": Education,"Style": ""},
        {"Title": "Skills", "Items": Skills, "Style": ""},
        {"Title": "Programming", "Items": Programming, "Style": "three-col"},
        {"Title": "Tools", "Items": Tools, "Style": "three-col"}
    ]

    return (
        <>
            <BrowserView>
                <NavBar />
                <div id="container">
                    <div className="d-flex align-items-center flex-column">
                        <Image className="mt-2" id="headshot" src={Headshot}/>
                        <h1 className="mb-3">Dan's Resume</h1>
                        {/* Education, Skills, Programming, & Tools Section */}
                        <div className="d-flex">
                            <div className="align-self-start">
                                {resumeItems.map(item => (
                                    <Card className="mb-2" style={{width: "275px", marginRight: "1rem"}}> 
                                        <Card.Body>
                                            <Card.Title>{item.Title}</Card.Title>
                                            <ColoredLine />
                                            <div id={item.Style}>
                                                {item.Items}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>

                            {/* Experience Section */}
                            <div className="align-self-start">
                                <Card style={{width: "700px"}}> 
                                    <Card.Body>
                                        <Card.Title>Experience</Card.Title>
                                        <ColoredLine />
                                        {experienceData.map(item => (
                                            <div>
                                                <Container className="d-flex justify-content-between">
                                                    <Card.Text className="mb-1" id="company-name"><Image id="logo" src={item.Logo}/> <a href="https://www.redhat.com"> {item.Company}</a></Card.Text>
                                                    <Card.Text>{item.Position}</Card.Text>
                                                </Container>
                                                <Container className="d-flex justify-content-between" id="location-date">
                                                    <Card.Text><FontAwesomeIcon size="1x" icon={Icon.MapMarked}/> {item.Location}</Card.Text>
                                                    <Card.Text><FontAwesomeIcon size="1x" icon={Icon.CalendarAlt}/> {item.Date}</Card.Text>
                                                </Container>
                                                <Container>
                                                    <ul>
                                                        {item.Description}
                                                    </ul>
                                                </Container>
                                            </div>
                                        ))}
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </BrowserView>

            <MobileView>

            </MobileView>
        </>
    );
}