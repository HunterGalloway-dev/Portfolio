import React from 'react';

import './BrowserModal.css';
import img from './student.jpg'


const Browser = (props) => {
  let project = props.project
  
  return (
  <div className="container-fluid p-0 BrowserModal" >

    <div className="card  m-0 p-0">
        <div className="card-header d-flex flex-row">
            
            <i className="fa-solid fa-circle icon-red m-1"></i>
            <i className="fa-solid fa-circle icon-yellow m-1"></i>
            <i className="fa-solid fa-circle icon-green m-1"></i>
            <div className="mx-auto card w-75 m-10 text-center">
                {project.title}
            </div>
        </div>
        <div className="card-body p-0">
          <img src={project.imgURL} className="img-fluid" alt="Project Screenshot"/>
        </div>
        <div className='card-footer'>
          {project.shortDescription}
        </div>
    </div>
  </div>)
};


export default Browser;
