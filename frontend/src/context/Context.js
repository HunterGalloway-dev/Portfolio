import axios from 'axios'

export function getAllProjects() {

    return axios.get(`${process.env.REACT_APP_API}/projects`).then(result => result.data);
}

export function login(username,password) {
    return axios.get(`${process.env.REACT_APP_API}/login`,{params: {
        username: username,
        password: password
    }}).then(result => result.data); 
}