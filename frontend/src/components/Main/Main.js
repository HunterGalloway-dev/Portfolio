import React, { useEffect, useState } from 'react';

import './Main.css';

import Browser from '../Browser/Browser'
import BrowserModal from '../BrowserModal/BrowserModal'
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar'
import { getAllProjects } from '../../context/Projects';
import Wave from 'react-wavify'
import Modal from 'react-bootstrap/Modal'

const Main = () => {

    const[projects, setProjects] = useState([])
    const[filterTags, setFilterTags] = useState(new Set())
    const[tags, setTags] = useState(new Set())
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [project, setProject] = useState({})

    const setProjectModal = (project) => {
        console.log('test')
        setProject(project)
        handleShow()
    }

    useEffect(() => {
        let mounted = true
        getAllProjects().then(result => {
            if(mounted) {

                result.forEach(project => {
                    project.tags.forEach(tag => tags.add(tag))
                });
                console.log(result)
                if(filterTags.size > 0) {
                    result = result.filter(project => {
                        return [...filterTags].every(tag => {
                            return project.tags.includes(tag)
                        })
                    })
                }

                console.log(result)

                setTags(tags)
                setProjects(result)
            }
        })

        return () => mounted = false
    }, [filterTags])

    const processFilter = (tag) => {
        let set = new Set(filterTags)
        
        if(!set.has(tag)) {
            set.add(tag)
        } else {
            set.delete(tag)
        }
        
        setFilterTags(set)
    }

    const getFilterTag = (tag) => {
        let style = 'btn-dark'
        if(filterTags.has(tag)) {
            style = 'btn-outline-dark bg-white text-dark'
        }

        return `btn ${style} rounded-pill me-1 mb-2 tag-button`
    }

    return(
    <div className="Main">

            <Navbar />
            <Hero />

            <Wave fill='#6C63FF'
                paused={false}
                options={{
                height: 30,
                amplitude: 30,
                speed: 0.2,
                points: 5
                }}
            /> 

            <Modal show={show} onHide={handleClose} dialogClassName='test'>
                <BrowserModal project={project}/>
            </Modal>
                                                                 
            <div className="container-fluid text-center bg-primary">
                <div className="row py-5 text-white">
                    <h1> &lt;Projects/&gt;</h1>
                </div>
                <div className='mb-3'>
                    {[...tags].map((tag, key) => <button key={key} onClick={() => processFilter(tag)} className={getFilterTag(tag)}>{tag}</button>)}
                </div>

                <div className="row gx-5 p-5">
                    {projects.map((project, key) => <Browser key={key} project={project} setProject={setProjectModal}/>)}
                </div>

            </div>
        </div>
    )
};



export default Main;
  