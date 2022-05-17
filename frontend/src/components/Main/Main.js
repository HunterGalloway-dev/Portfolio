import React from 'react';

import './Main.css';

import Browser from '../Browser/Browser.js'

let project = {
    title: 'title'
}

const Main = () => (
    <div className="App">
    <h1>Hunter Galloway</h1>                                                                                        
    <div className="container">

        <div className="row">
            <Browser project={project}/>
        </div>

    </div>
    </div>
);



export default Main;
  