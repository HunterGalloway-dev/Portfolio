import React from 'react';

import './Main.css';

import Browser from '../Browser/Browser'
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar'

let project = {
    title: 'title'
}

const projects = [
    {
        title: 'Comsi Classroom',
        shortDesc: 'I made a classroom',
        tags: ['Angular', 'MongoDB', 'Express', 'NodeJS'],
        gitHub: 'https://github.com/HunterGalloway-dev/ComsiClassroom'
    }
]

let browsers = [
    <Browser key="1" project={projects[0]} />
]

const Main = () => (
    <div className="Main">

        <Navbar />
        <Hero />                                                                                    
        <div className="container-fluid text-center">
            <div className="row py-5">
                <h1>Projects</h1>
            </div>
            <div className="row">
                {browsers}
            </div>

        </div>
    </div>
);



export default Main;
  