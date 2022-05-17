import React from 'react';

import './Browser.css';
import img from './student.jpg'



const Browser = (props) => (
  <div className="col-md-6 col-sm-12 mb-3">

    <div className="card">
        <div className="card-header d-flex flex-row">
            
            <i className="fa-solid fa-circle icon-red m-1"></i>
            <i className="fa-solid fa-circle icon-yellow m-1"></i>
            <i className="fa-solid fa-circle icon-green m-1"></i>
            <div className="mx-auto card w-75 m-10">
                Grade Application11
            </div>
            <a href="github.com" className="fa fa-brands fa-github fa-2x link-dark link-no-style">
                
            </a>
        </div>
        <div className="card-body p-0">
            <img src={img} className="img-fluid" alt="Project Screenshot"/>
        </div>
    </div>
  </div>
);


export default Browser;
