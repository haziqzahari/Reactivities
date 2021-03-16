import * as React from 'react';
import { Component } from 'react';
import About from './About/about';
import NavigationBar from './NavigationBar/navigation-bar';
import Projects from './Projects/projects';
import Section1 from './Section1/section1';
import './Home.css'

interface Props{
    openForm: () => void;
}

 
export default function Home(){
    return ( 
        <div>
            <NavigationBar/>
            <Section1/>
            <About/>
            <Projects/>
        </div>
    );
};