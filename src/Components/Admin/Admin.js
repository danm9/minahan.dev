import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { Table, Image } from "react-bootstrap";
import Icon from "../Images/Icons/Icon.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { experienceData, volunteerData, toolsData, programmingData, educationData, certificationData, skillsData } from "../Resume/ResumeData";
import './Admin.css';

export function Admin() {
    const Education =
        educationData.map(item => (
          <tr>
                <td>{item.College}</td>
                <td>{item.Program}</td>
                <td><Image id="logo" src={item.Logo}></Image></td>
                <td>{item.URL}</td>
                <td>EDIT DELETE</td>
          </tr>
        ))

    const Certification =
        certificationData.map(item => (
            <tr>
                <td>{item.Provider}</td>
                <td>{item.Certification}</td>
                <td><Image id="logo" src={item.Logo}></Image></td>
                <td>{item.URL}</td>
                <td>EDIT DELETE</td>
            </tr>
        ))
    
    const Skills =
        skillsData.map(item => (
            <tr>
                <td>{item.Skill}</td>
                <td><FontAwesomeIcon size="1x" icon={item.Icon} style={{width: "1rem"}} /></td>
                <td>EDIT DELETE</td>
            </tr>
        ))

    const Programming =
        programmingData.map(item => (
            <tr>
                <td><Image id="logo" src={item}></Image></td>
                <td>EDIT DELETE</td>
            </tr>
        ))

    const Tools =
        toolsData.map(item => (
            <tr>
                <td><Image id="logo" src={item}></Image></td>
                <td>EDIT DELETE</td>
            </tr>
        ))

    const Experience =
        experienceData.map(item => (
            <tr>
                <td>{item.Company}</td>
                <td>{item.Position}</td>
                <td>{item.Location}</td>
                <td>{item.Date}</td>
                <td><Image id="logo" src={item.Logo}></Image></td>
                <td>{item.Description}</td>
                <td>{item.URL}</td>
                <td>EDIT DELETE</td>
            </tr>
        ))

    const Volunteer =
        volunteerData.map(item => (
            <tr>
                <td>{item.Company}</td>
                <td>{item.Position}</td>
                <td>{item.Location}</td>
                <td>{item.Date}</td>
                <td><Image id="logo" src={item.Logo}></Image></td>
                <td>{item.Description}</td>
                <td>{item.URL}</td>
                <td>EDIT DELETE</td>
            </tr>
        ))

    
    const resumeItems = [
        {"Title": "Education", "Items": Education},
        {"Title": "Certification", "Items": Certification},
        {"Title": "Skills", "Items": Skills},
        {"Title": "Programming", "Items": Programming},
        {"Title": "Tools", "Items": Tools},
        {"Title": "Experience", "Items": Experience},
        {"Title": "Volunteer", "Items": Volunteer}

    ]
    
    return (
        <>
            <NavBar />
                <div id="container">
                    <h3 className="text-center mb-2 mt-2">Resume Data</h3>
                    {resumeItems.map(item => (
                        <Table className="mb-2 mt-2 w-75 mx-auto ">
                            <thead>
                                <th>{item.Title}</th>                                      
                            </thead>
                            <tbody>
                                {item.Items}
                            </tbody>
                            <tr>Add More</tr>
                            <br />
                        </Table>
                    ))}
                </div>
            <Footer />
        </>
    );
}
