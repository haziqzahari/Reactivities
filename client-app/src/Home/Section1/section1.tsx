import React, { Component } from 'react';
import './Section1.css';

class Section1 extends Component {
    state = {
        welcome: 'Welcome to MHZ',
        about: '#about',
        project: '/project',
        image: '/images/home-profile.png'
      }
    render() { 
        return ( 
            <div className="section1 container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-12 pl-5">
                                <p className="title">Welcome to My Page!</p>
                                <p className="subtitle">MHZ  |  MUHAMMAD HAZIQ ZAHARI</p>
                                <p>
                                    <a className="btn btn-dark" href={this.state.about}>Find Out More!</a>
                                    <a className="btn btn-outline-dark" href={this.state.project}>My Projects</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 pl-5">
                        <div><img src={this.state.image} alt=""/></div>
                        <div id="circle1"></div>
                        <div id="circle2"></div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Section1;