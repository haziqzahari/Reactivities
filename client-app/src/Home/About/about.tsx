import React, { Component } from 'react';
import './About.css'

class About extends Component {
    state = {
        biodata: {
            myName: 'Muhammad Haziq bin Zahari',
            age: '23 years old'
        },
        education : {
            university: 'Universiti Kebangsaan Malaysia',
            degree: 'Bachelors Deg. with Honors in Software Engineering of Information System Development'
        },
        location:{
            address1: '30, Jalan Sungai Klang 32/15',
            address2: 'Berjaya Park,',
            address3: '40460, Shah Alam'
        }, 
        contact: {
            phone: '018-9193711',
            email: 'haziq@wammap.com',
            linkedin: 'Haziq Zahari'
        }
      }

    render() { 
        return ( 
            <div id="about" className="about container-fluid">
                <div className="row h-100">
                    <div id="biodata" className="col-md-3 about-content">
                        <div className="title text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <p className="pt-3">Biodata</p>
                        </div>
                        <div className="subtitle">
                            <p>{this.state.biodata.myName}</p>
                            <p className="mt-5">{this.state.biodata.age}</p>
                        </div>
                    </div>
                    <div id="education" className="col-md-3 about-content">
                    <div className="title text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-book-fill" viewBox="0 0 16 16">
                        <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                    </svg>                            
                            <p className="pt-3">Education</p>
                        </div>
                        <div className="subtitle">
                            <p>{this.state.education.university}</p>
                            <p className="mt-5">{this.state.education.degree}</p>
                        </div>
                    </div>
                    <div id="location" className="col-md-3 about-content">
                    <div className="title text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                            <p className="pt-3">Location</p>
                        </div>
                        <div className="subtitle">
                            <p>{this.state.location.address1}</p>
                            <p>{this.state.location.address2}</p>
                            <p>{this.state.location.address3}</p>
                        </div>
                    </div>
                    <div id="contact" className="col-md-3 about-content pl-5">
                    <div className="title text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                            <p className="pt-3">Contacts</p>
                        </div>
                        <div className="subtitle">
                            <p>
                                Phone: <br/>
                                {this.state.contact.phone}
                            </p>
                            <p>
                                Email: <br/>
                                {this.state.contact.email}
                            </p>
                            <p>
                                LinkedIn: <br/>
                                {this.state.contact.linkedin}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default About;