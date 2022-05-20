import React from 'react';

import './Browser.css';
import img from './student.jpg'


const Browser = (props) => {
  let project = props.project
  console.log(project.imgURL)
  return (
  <div className="btn col-md-6 col-sm-12 mb-3 Browser" >

    <div className="card">
        <div className="card-header d-flex flex-row">
            
            <i className="fa-solid fa-circle icon-red m-1"></i>
            <i className="fa-solid fa-circle icon-yellow m-1"></i>
            <i className="fa-solid fa-circle icon-green m-1"></i>
            <div className="mx-auto card w-75 m-10">
                {project.title}
            </div>
            <a href={project.gitHub} target='_blank' className="fa fa-brands fa-github fa-2x link-dark link-no-style">
                
            </a>
        </div>
        <div className="card-body p-0" onClick={() => props.setProject(project)}>
            <img src={project.imgURL} className="img-fluid" alt="Project Screenshot"/>
        </div>
        <div className='card-footer'>
          {project.shortDescription}
          <div>
            {project.tags.map(tag => <span className='btn rounded-pill me-1 mb-1 btn-sm btn-dark'>{tag}</span>)}
          </div>
        </div>
    </div>
  </div>)
};


export default Browser;
