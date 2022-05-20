const express = require('express')
const project = require('../model/project')
const Project = require('../model/project')
const Tag = require('../model/tag')
const router = express.Router()

// process the promise routine that mongoose uses to run CRUD operations on model
function promiseRoutine(res,err,result) {
    if(err) {
        res.status(400).json({message: err.message})     
    } else {
        res.status(200).json(result)
    }
}

// Process tags on projects to find differences with database and add any new tags when a project is created
function updateTags(tags) {
    Tag.find((err,result) => {
        let dbTags = result.map(tag => tag.name)
        tags = tags.filter(tag => !dbTags.includes(tag));

        
        if(tags.length > 0) {
            tags = tags.map(tag => {
                return new Tag({
                    name: tag
                })
            })
    
            Tag.insertMany(tags).then()
        }
    })

}

// Process a deleted projects tags to see if they should be removed
function deleteTags(tags) {
    // Loop through each tag on the deleted project 
    tags.forEach((tag) => {

        // Check if the tag exists on any project
        Project.exists({
            tag: tag
        }).then((tagExists) => {
            if(!tagExists) {
                Tag.deleteOne({name:tag}).then(result => {

                })
                .catch(err => {
                    console.log(err)
                })
            }
        })
        // If tagExists == false (No project found with tag) remove the tag
        
    })
}

// Post Method
router.post('/project', (req, res) => {
    const project = new Project({
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        githubURL: req.body.githubURL,
        youtubeURL: req.body.youtubeURL,
        imgURL: req.body.imgURL,
        description: req.body.description,
        tags: req.body.tags,

    })

    project.save((err, result) => {
        promiseRoutine(res,err,result)

        if(!err) {
            updateTags(project.tags)
        }
    });
    
    
})

// Helper method to filter fields on an object
function projectDTO(project) {
    return {
        id: project._id,
        title: project.title,
        shortDescription: project.shortDescription,
        githubUrl: project.githubUrl,
        videoURL: project.videoURL,
        imgURL: project.imgURL,
        description: project.description,
        tags: project.tags
    }
}

// Get All Method
router.get('/projects', (req, res) => {
    let tags = req.body.tags
  
    let query = {}
    if (tags) {
        query = {
            "tags": {
                "$in": tags
            }
        }
    }
    
    Project.find(query,(err,result) => {
        cleansed = result.map(project => {
            return projectDTO(project)
        })
        promiseRoutine(res,err,cleansed)
    })
    
})

// Get by ID Method
router.get('/project/:id', (req,res) => {
    Project.findById(req.params.id, (err,result) => {
        result = projectDTO(result)
        promiseRoutine(res,err,result)
    })
})

// Get all project tags
router.get('/projects/tags', (req,res) => {
    Tag.find().then(result => {
        let tags = result.map(tag => tag.name)

        res.status(200).json(tags)
    })
    .catch(err => {
        res.status(400).json(err.message)
    })
})

// Patch method
router.patch('/project/:id', (req,res) => {
    const id = req.params.id;
    const updatedData = req.body;
    const options = {new: true}

    let tags = req.body.tags
    console.log("WHY")
    if(tags) {
        updateTags(tags)
    }

    Project.findByIdAndUpdate(
        id, updatedData, options,
        (err,result) => {
            promiseRoutine(res,err,result)
        }
    )
})

// Delete by ID Method
router.delete('/delete/:id', async (req, res) => {

    let exists = await Project.exists({_id: req.params.id}).then(result => {
        return true
    })
    .catch(err=> {
        return false
    })

    
    if(exists) {
        Project.findByIdAndDelete(
            req.params.id,
            (err,result) => {
    
                deleteTags(result.tags)
                promiseRoutine(res,err,result)
            }
        )
    } else {
        res.status(400).json()
    }
})

module.exports = router;