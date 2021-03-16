import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="projects" className="projects container-fluid pt-5">
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-center project-title">MY PROJECTS</p>
                        <hr className="w-25"/>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                        <div className="col-md-4 offset-md-1">
                            <div className="card" id="project1">
                                <div className="card-body">
                                    <div className="row">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="title">
                                            <p>WeCare</p>
                                        </div>
                                        <div className="subtitle text-justify p-3">
                                            <p>Third year project - a study case on UKM Karier
                                                to develop a system with the following functionalities : <br/>

                                                <ul>
                                                    <li>Set Up Appointment with counsellors.</li>
                                                    <li>View Schedule Availability</li>
                                                    <li>Manage Counselling Records</li>
                                                    <li>Answer E-psychometric Tests</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" id="project2">
                                <div className="card-body">
                                <div className="row">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="title">
                                            <p>EzDental</p>
                                        </div>
                                        <div className="subtitle text-justify p-3">
                                            <p>Final year project - a study case on Prosthodontic Unit of UKM Dentistry Faculty
                                                to develop a system with the following functionalities : <br/>

                                                <ul>
                                                    <li>Case Registration and verification</li>
                                                    <li>Manage Case Records</li>
                                                    <li>Automated Case Assignation</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row footer text-center p-3">
                            <div className="col-md-12">
                                <p>Created by Muhammad Haziq Zahari  |  MHZ</p>
                            </div>
                    </div>
            </div>
         );
    }
}
 
export default Projects;